import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DataInt, ServiceInt, FormValueInt, SubInt } from './models/servicesModel';
import { HOSPITATYPELENUM } from './models/ENUM/HOSPITALENUM';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://17edc6b8385b4dfeb957015355f1736b.api.mockbin.io/';
  result!: ServiceInt[]

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<DataInt>(this.apiUrl).pipe(
      map((result) => {
        let serviceInfo = result.serviceInfo;
        let serviceArray: ServiceInt[] = [
          {
            serviceName: HOSPITATYPELENUM.HOTELIMG,
            serviceInfo: serviceInfo.hotelingServices
          }, {
            serviceName: HOSPITATYPELENUM.OTHER,
            serviceInfo: serviceInfo.otherServices
          }, {
            serviceName: HOSPITATYPELENUM.DRUGANDEQUIP,
            serviceInfo: serviceInfo.drugAndEquipServices
          }, {
            serviceName: HOSPITATYPELENUM.DOCTORS,
            serviceInfo: serviceInfo.doctorServices
          }, {
            serviceName: HOSPITATYPELENUM.PARACLINIC,
            serviceInfo: serviceInfo.paraclinicServices
          }
        ]
        const serviceArrayFilterd = serviceArray.map(serviceInfo => {
          let newCategory = serviceInfo.serviceInfo.categories.filter(cat => {
            return cat.sumOfTotalAmount !== 0;
          });
          serviceInfo.serviceInfo.categories = newCategory;
          return serviceInfo;
        })

        this.result = serviceArrayFilterd
        return serviceArrayFilterd

      })
    )
  }

  updateData(setFormValue: FormValueInt): void {
    let input: SubInt = {
      name: setFormValue.name,
      insuredAmount: setFormValue.insuredAmount,
      orgAmount: setFormValue.orgAmount,
      sumOfTotalAmount: setFormValue.total,
      serviceName: setFormValue.serviceName,
      total: setFormValue.total
    }

    let foundedCategory = this.result.find((service) => {
      return service.serviceInfo.categories.some((sub) => {
        return sub.name === setFormValue.name;
      })
    })?.serviceInfo.categories.find((sub: any) => {
      return sub.name === setFormValue.name
    });

    if (foundedCategory) {
      foundedCategory.subs?.push(input)
    }
  }
}
