import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValueInt, SubInt } from '../models/servicesModel';
import { HOTELINGENUM } from '../models/ENUM/HOTELINGENUM';
import { OTHERENUM } from '../models/ENUM/OTHERENUM';
import { DRUGANDEQUIPENUM } from '../models/ENUM/DRUGANDEQUIPENUM';
import { DOCTORESENUM } from '../models/ENUM/DOCTORSENUM';
import { PARACLINICENUM } from '../models/ENUM/PARACLINICENUM';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent {
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
