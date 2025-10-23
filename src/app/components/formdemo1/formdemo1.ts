import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formdemo1',
  imports: [FormsModule],
  templateUrl: './formdemo1.html',
  styleUrl: './formdemo1.css'
})
export class Formdemo1 {
  name = 'sadhwika';
  age = 23;

}
