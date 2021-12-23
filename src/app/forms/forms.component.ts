import { Component, OnInit } from '@angular/core';
import { FormServiceService, selectCondition, tplotOptions } from '../form-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    } as MatFormFieldDefaultOptions
  }]
})
export class FormsComponent implements OnInit {
  public cardDataReactiveForm!: FormGroup;
  public months: string[];
  public years: string[];
  public selectCondition!: tplotOptions;

  constructor(public formServiceService: FormServiceService) {
    this.cardDataReactiveForm = formServiceService.form;
    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.years = ['2021', '2022', '2023', '2024', '2025', '2026'];
    this.selectCondition = formServiceService.selectCondition;
  }

  ngOnInit(): void {
  }

  activateRenderArea(ev: any): void {
    let currentInput = ev.target.getAttribute('formControlName');
    this.selectCondition[currentInput] = !this.selectCondition[currentInput];
  }

}