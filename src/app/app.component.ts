import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormValueInt } from './models/servicesModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  setFormValue !: FormValueInt
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe()
  }

  get serviceInfo() {
    return this.dataService.result;
  }

  onSetForms(setformValue: FormValueInt) {
    this.dataService.updateData(setformValue)
  }

}