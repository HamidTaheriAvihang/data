import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ServiceInfoInt, DataInt, ServiceInt, FormValueInt, SubInt } from './models/servicesModel';
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

  // updateData(setFormValue: FormValueInt): void {
  //   let input: SubInt = {
  //     insuredAmount: setFormValue.insuredAmount,
  //     orgAmount: setFormValue.orgAmount,
  //     sumOfTotalAmount: setFormValue.total,
  //     serviceName: setFormValue.serviceName,
  //     symbol: setFormValue.name
  //   }


  //   let siri = this.result.map(res => {
  //     res.serviceInfo.categories.map(cat => cat.symbol);
  //     console.log(siri);

  // if ( siri === setFormValue.name) {
  //   res.serviceInfo.categories.push(input)
  // }
  //   })
  // }

  updateData(setFormValue: FormValueInt): void {
    let input: SubInt = {
      insuredAmount: setFormValue.insuredAmount,
      orgAmount: setFormValue.orgAmount,
      sumOfTotalAmount: setFormValue.total,
      serviceName: setFormValue.serviceName
    }



    let foundedCategory: any = this.result.find((service: any) => {
      return service.serviceInfo.categories.some((sub: any) => {
        return sub.name === setFormValue.name;
      })
    })?.serviceInfo.categories.find((sub: any) => {
      return sub.name === setFormValue.name
    });

    if (foundedCategory) {
      foundedCategory?.subs?.push(input)
    }

    console.log(this.result);
    console.log(foundedCategory);


  }
  // updateData(setFormValue: FormValueInt): void {
  //   const shahid = this.result.map(res => {
  //      res.serviceInfo.symbol === setFormValue.name 
  //     })
  //   }

  // updateData(setFormValue: FormValueInt): void {
  //   this.result.map(res => {
  //     let hamid = res.serviceInfo.categories.filter(cat => {
  //       return cat. == setFormValue.serviceName
  //     })


  // })


}




// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, map } from 'rxjs';
// import { ServiceInt } from './models/servicesModel';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private apiUrl = 'https://17edc6b8385b4dfeb957015355f1736b.api.mockbin.io/';

//   result: any = this.getData
//   // tet = console.log(this.result);

//   constructor(private http: HttpClient) { }

//   getData(): Observable<any> {
//     return this.http.get<ServiceInt>(this.apiUrl).pipe(
//       map((result) => {
//         let serviceInfo = result.serviceInfo;
//         let serviceArray = [
//           {
//             serviceName: "هتلینگ",
//             serviceInfo: serviceInfo.hotelingServices
//           }, {
//             serviceName: "سایر",
//             serviceInfo: serviceInfo.otherServices
//           }, {
//             serviceName: "دارو و تجهیزات",
//             serviceInfo: serviceInfo.drugAndEquipServices
//           }, {
//             serviceName: "پزشکان",
//             serviceInfo: serviceInfo.doctorServices
//           }, {
//             serviceName: "پارا کلنیک",
//             serviceInfo: serviceInfo.paraclinicServices
//           }
//         ]
//         const serviceArrayFilterd = serviceArray.map(serviceInfo => {
//           let newCategory = serviceInfo.serviceInfo.categories.filter(cat => {
//             return cat.sumOfTotalAmount !== 0;
//           });
//           serviceInfo.serviceInfo.categories = newCategory;


//           return serviceInfo;
//         })

//         // this.result = serviceArrayFilterd
//         // console.log(serviceArrayFilterd);

//         return serviceArrayFilterd;
//       })

//     )
//   }

// }

