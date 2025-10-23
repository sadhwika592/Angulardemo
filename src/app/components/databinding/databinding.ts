import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  userName: string = 'Sadhwika Reddy';
  img_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZcXqeJb0eD5GUoOCU42K_KSsnrsODsH0OR6q4iMc1YwNEJYZ4ktPlGc6kFINTs8iTyY&usqp=CAU';

  flag: boolean = true;
  toggleFlag(){
    this.flag = !this.flag; //will change true to false and other way
  }
// assignment

  isVisible=true;
        visible(){
          this.isVisible =! this.isVisible;
        }
      
      text : string= "";

      selectstate :string = "Cincinnati";


  num1 = 0;
  num2 = 0;
  operator = '+';
  result = 0;

  calculate() {
    switch(this.operator) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num2 !== 0 ? this.num1 / this.num2 : 0; break;
      //default: console.warn("Error");
    }
  }

  counter=0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter=0;
  }

  darkMode=false;
  toggleMode(){
    this.darkMode=!this.darkMode;
    //document.body.className=this.darkMode?'dark':'light';
  }


}



