import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {
  newArray: string[] = [];

  transform(value: string): string {
    value += '#'.repeat(16-value.length);
    let arrayForValue = value.split('');
    for(let i = 0; i < arrayForValue.length; i++) {
      this.newArray.push(arrayForValue[i]);
      if ((i+1) % 4 == 0) {
        this.newArray.push(' ');   
      }
    }
    value = this.newArray.join('');
    this.newArray.length = 0;
    return value
  }

}
