import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { FormsModule } from '@angular/forms';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
//import { SearchPipe } from '../../custom-pipes/search-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule, OrdinalPipe, RomanPipe,AgePipe,SalutationPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {

  numbers = [21,22,23,24,4,8,9];
  birthdate = '2001-09-05';

  searchText = '';
  employees = [
    { name: 'Sadhwika', gender: 'female', dept: 'IT' },
    { name: 'Vanitha', gender: 'female', dept: 'HR' },
    { name: 'Akhil', gender: 'male', dept: 'Finance' },
    { name: 'Bharathi', gender: 'female', dept: 'Marketing' }
  ];

}
