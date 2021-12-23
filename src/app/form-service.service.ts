import { Injectable, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type tplotOptions = {
  [key: string]: boolean
}

// const plotOptions: tplotOptions = {
//   name_1: true,
//   name_2: true,
// }
// export interface DataFormForRender {
//   cardNumber: number;
//   cardName: string;
//   month: string;
//   year: string;
//   cvv: number
// }
export interface selectCondition {
  cardNumber: boolean;
  cardName: boolean;
  month: boolean;
  year: boolean;
  cvv: boolean
}
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  public form: FormGroup;
  public months: string[];
  public selectCondition: tplotOptions;

  constructor(private fb: FormBuilder) { 
    this.form = this.initForm();
    this.months = [];
    this.selectCondition = {
      cardNumber: false,
      cardName: false,
      month: false,
      year: false,
      cvv: false
    };
  }

  initForm(): FormGroup{
    return this.fb.group({
      cardNumber: ['', [
        Validators.required,
      ]],
      cardName: ['', [
        Validators.required,
      ]],
      month: ['', [
        Validators.required,
      ]],
      year: ['', [
        Validators.required,
      ]],
      cvv: ['', [
        Validators.required,
      ]]
    });
  }

}