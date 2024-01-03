import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ServiceInt } from './models/servicesModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://17edc6b8385b4dfeb957015355f1736b.api.mockbin.io/';

  result: any = this.getData
  tet = console.log(this.result);

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<ServiceInt>(this.apiUrl).pipe(
      map((result) => {
        let serviceInfo = result.serviceInfo;
        let serviceArray = [
          {
            serviceName: "هتلینگ",
            serviceInfo: serviceInfo.hotelingServices
          }, {
            serviceName: "سایر",
            serviceInfo: serviceInfo.otherServices
          }, {
            serviceName: "دارو و تجهیزات",
            serviceInfo: serviceInfo.drugAndEquipServices
          }, {
            serviceName: "پزشکان",
            serviceInfo: serviceInfo.doctorServices
          }, {
            serviceName: "پارا کلنیک",
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

        // this.result = serviceArrayFilterd
        return serviceArrayFilterd;
      })
    )
  }


}

