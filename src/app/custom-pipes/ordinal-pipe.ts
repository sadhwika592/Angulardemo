import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number) {
    let add_format = 'th';
    let rem = value%10;

    switch(rem){
      case 1:
        if(value % 100 !== 11) add_format = 'st';
        break;
      case 2:
        if(value % 100 !== 12) add_format = 'nd';
        break;
      case 3:
        if(value % 100 !== 13) add_format = 'rd';
        break;
    }
    return value + add_format;
  }

}
