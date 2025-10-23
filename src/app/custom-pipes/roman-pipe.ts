import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number) {
    let res = '';
    let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romans = ['M','CM','D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    for (let i=0; i < numbers.length; i++){
      while (value >= numbers[i]){
        res += romans[i];
        value -= numbers[i];
      }
    }
    return res;
  }

}
