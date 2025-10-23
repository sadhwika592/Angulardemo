import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any){
    let current_year = 2025;
    let birthYear = new Date(value).getFullYear();
    let age = current_year - birthYear;
    return age + ' years old'
  }

}
