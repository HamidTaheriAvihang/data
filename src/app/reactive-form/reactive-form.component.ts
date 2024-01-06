import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValueInt, SubInt } from '../models/servicesModel';
import { HOTELINGENUM } from '../models/ENUM/HOTELINGENUM';
import { OTHERENUM } from '../models/ENUM/OTHERENUM';
import { DRUGANDEQUIPENUM } from '../models/ENUM/DRUGANDEQUIPENUM';
import { DOCTORESENUM } from '../models/ENUM/DOCTORSENUM';
import { PARACLINICENUM } from '../models/ENUM/PARACLINICENUM';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],

})
export class ReactiveFormComponent {
  setFormValue !: SubInt
  name!: string
  serviceName!: string
  insuredAmount!: number
  orgAmount!: number
  total!: number
  @Output() valuesForms = new EventEmitter()


  setServiceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    serviceName: new FormControl('', Validators.required),
    insuredAmount: new FormControl('', Validators.required),
    orgAmount: new FormControl('', Validators.required)
  })
  myControl = new FormControl();
  options: string[] = [HOTELINGENUM.bed, HOTELINGENUM.nursingCare, OTHERENUM.emergencyServices, DRUGANDEQUIPENUM.drug, DRUGANDEQUIPENUM.consumables, DOCTORESENUM.surgeon, DOCTORESENUM.visitInWard, PARACLINICENUM.pathobiology, PARACLINICENUM.laboratory];

  setForm() {
    const controls = this.setServiceForm.controls
    this.name = controls.name.value as string
    this.serviceName = controls.serviceName.value as string
    this.orgAmount = controls.insuredAmount.value as unknown as number
    this.insuredAmount = controls.insuredAmount.value as unknown as number
    this.total = this.insuredAmount + this.orgAmount

    const setFormValue: FormValueInt = { name: this.name, serviceName: this.serviceName, orgAmount: this.orgAmount, insuredAmount: this.insuredAmount, total: this.orgAmount + this.insuredAmount }

    this.valuesForms.emit(setFormValue)

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

