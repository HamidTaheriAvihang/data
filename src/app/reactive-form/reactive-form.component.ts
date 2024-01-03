import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],

})
export class ReactiveFormComponent {
  name: string = ''
  serviceName: string = ''
  insuredAmount: number = 0
  orgAmount: number = 0

  setService = new FormGroup({
    name: new FormControl('', Validators.required),
    serviceName: new FormControl('', Validators.required),
    insuredAmount: new FormControl('', Validators.required),
    orgAmount: new FormControl('', Validators.required)
  })
  myControl = new FormControl();
  options: string[] = ['تخت', 'خدمات پرستاری', 'خدمات اورژانس', 'دارو', 'لوازم مصرفی', 'ویزیت در بخش', 'جراح', 'آزمایشگاه', 'تصویربرداری'];

  setForm() {
    const controls = this.setService.controls
    this.name = controls.name.value as string
    this.serviceName = controls.serviceName.value as string
    this.orgAmount = controls.insuredAmount.value as unknown as number
    this.insuredAmount = controls.insuredAmount.value as unknown as number
    console.log('name =', this.name);
    console.log('serviceName =', this.serviceName);
    console.log('insuredAmount =', this.orgAmount);
    console.log('orgAmount =', this.insuredAmount);
  }
}

//FOR SEND FORM TO APP
// import { Component, Output, EventEmitter } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormValueInt } from '../models/servicesModel';


// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css'],

// })
// export class ReactiveFormComponent {
//   name: string = ''
//   serviceName: string = ''
//   insuredAmount: number = 0
//   orgAmount: number = 0
//   total: number = 0
//   @Output() valuesForms = new EventEmitter()

//   setService = new FormGroup({
//     name: new FormControl('', Validators.required),
//     serviceName: new FormControl('', Validators.required),
//     insuredAmount: new FormControl('', Validators.required),
//     orgAmount: new FormControl('', Validators.required)
//   })
//   myControl = new FormControl();
//   options: string[] = ['تخت', 'خدمات پرستاری', 'خدمات اورژانس', 'دارو', 'لوازم مصرفی', 'ویزیت در بخش', 'جراح', 'آزمایشگاه', 'تصویربرداری'];

//   setForm() {
//     const controls = this.setService.controls
//     this.name = controls.name.value as string
//     this.serviceName = controls.serviceName.value as string
//     this.orgAmount = controls.insuredAmount.value as unknown as number
//     this.insuredAmount = controls.insuredAmount.value as unknown as number
//     this.total = this.orgAmount + this.insuredAmount

//     const formValue: FormValueInt = { name: this.name, serviceName: this.serviceName, orgAmount: this.orgAmount, insuredAmount: this.insuredAmount, total: this.total }

//     this.valuesForms.emit(formValue)

//   }

// }

