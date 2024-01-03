import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) { }
  title = 'dataServis';
  data: any;
  serviceInfo!: any;

  ngOnInit(): void {
    // let hamid = this.dataService.result
    // console.log(hamid);

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
