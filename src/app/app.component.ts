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

// FOR SEND FORM
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { FormValueInt } from './models/servicesModel';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   constructor(private dataService: DataService) { }
//   title = 'dataServis';
//   data: any;
//   serviceInfo!: any;

//   ngOnInit(): void {
//     this.dataService.getData().subscribe(data => {
//       this.serviceInfo = data;
//     });
//   }

//   onSetForms(formValue: FormValueInt) {
//     console.log(formValue);

//   }

// }
