import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  imports: [FormsModule, CommonModule],
  templateUrl: './registrationform.html',
  styleUrl: './registrationform.css'
})
export class Registrationform {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    about:''
  };

  submitRegistration(formObj: NgForm){
    console.log('Form Submitted:', formObj.value);
    alert('Registration Successful');
    formObj.resetForm();
  }

  resetForm(formObj: NgForm){
    formObj.resetForm();
  }

}
