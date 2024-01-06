import { Component, Input } from '@angular/core';
import { ServiceInt } from '../models/servicesModel';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.css']
})
export class ServicesTableComponent {


  @Input() serviceInfo!: ServiceInt;

  columnNames = ['nameSERVICE', 'countSERVIC', 'serviceName', 'insuredAmount', 'orgAmount', 'total', 'Sum Of total']
}


// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { ServiceInt } from '../models/servicesModel';

// @Component({
//   selector: 'app-services-table',
//   templateUrl: './services-table.component.html',
//   styleUrls: ['./services-table.component.css']
// })
// export class ServicesTableComponent implements OnInit {
//   constructor(private dataService: DataService) { }


//   ngOnInit(): void {
//     this.dataService.getData().subscribe()
//   }

//   get serviceInfo() {
//     return this.dataService.result;
//   }

//   columnNames = ['nameSERVICE', 'countSERVIC', 'serviceName', 'insuredAmount', 'orgAmount', 'total', 'Sum Of total']
// }




