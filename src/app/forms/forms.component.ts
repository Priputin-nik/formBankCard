import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public numberCard: FormControl;

  @Output() public username: string;

  constructor() {
  this.numberCard = new FormControl('');
  this.username = '';
   }

  ngOnInit(): void {
  }

}