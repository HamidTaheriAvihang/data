import { Component, Input } from '@angular/core';
import { ServiceInt } from '../models/servicesModel';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.css']
})
export class ServicesTableComponent {


  @Input() serviceInfo!: ServiceInt;

  columnNames = ['nameSERVICE', 'countSERVIC', 'serviceName', 'insuredAmount', 'orgAmount', 'total']
}


