import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor() { }
  @Input() serviceInfo!: any;
  columnNames = ['nameSERVICE', 'countSERVIC', 'serviceName', 'insuredAmount', 'orgAmount', 'total', 'Sum Of total']
}
