import { Component } from '@angular/core';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-displayname',
  imports: [SalutationPipe, CommonModule],
  templateUrl: './displayname.html',
  styleUrl: './displayname.css'
})
export class Displayname {
  employees : any[] = [
    { id: 1, name: 'Sadhwika Rachamalla', gender: 'Female', salary: 69000 },
    { id: 2, name: 'Bharathi Yelem', gender: 'Female', salary: 85000 },
    { id: 3, name: 'Vanitha Reddy', gender: 'Female', salary: 90000 },
    { id: 4, name: 'Akhil Mummadi', gender: 'Male', salary: 98000 },
  ];


    
  

}
