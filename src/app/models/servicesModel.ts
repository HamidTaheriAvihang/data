import { HOSPITATYPELENUM } from "./ENUM/HOSPITALENUM"

export interface DataInt {
  serviceInfo: ServiceInfoInt

}

export interface ServiceInt {
  serviceInfo: ServiceAmount
  serviceName: HOSPITATYPELENUM
}

export interface ServiceInfoInt {
  hotelingServices: ServiceAmount,
  otherServices: ServiceAmount,
  drugAndEquipServices: ServiceAmount,
  doctorServices: ServiceAmount,
  paraclinicServices: ServiceAmount,

}

export interface ServiceAmount {
  sumOfTotalAmount: number,

  categories: SubInt[]
}

export interface CatInt {

  Name: string,
  subs: SubInt[]

}

export interface SubInt {
  name: string
  serviceName: string
  sumOfTotalAmount: number,
  orgAmount: number,
  insuredAmount: number,
  subs?: SubInt[],
  total?: number;
}

export interface ServiceResult {
  serviceInfo: ServiceInfoInt
}

export interface FormValueInt {
  name: string,
  serviceName: string,
  orgAmount: number,
  insuredAmount: number,
  total: number
}
