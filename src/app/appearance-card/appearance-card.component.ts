import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormServiceService, selectCondition, tplotOptions } from '../form-service.service';

@Component({
  selector: 'app-appearance-card',
  templateUrl: './appearance-card.component.html',
  styleUrls: ['./appearance-card.component.scss']
})
export class AppearanceCardComponent implements OnInit {
public cardNumberShow: string;
public arrayCondition: tplotOptions;

  constructor(public formServiceService: FormServiceService) { 
    this.cardNumberShow = '';
    this.arrayCondition = formServiceService.selectCondition;
  }

  get value() {
    return this.formServiceService.form.value;
  }

  ngOnInit(): void {
    
  }

}