import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(gender:any){
    return gender === 'Male' ? 'Mr.' : gender === 'Female' ? 'Miss.' : "";
  }

}
