import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {

  constructor(private router: Router, private location: Location){}

  doSomethingGoHome(){
    console.log('Doing Something..');
    this.router.navigate(['/home']);
  }

  goToPreviousPage(){
    this.location.back();
  }

  goToNextPage(){
    this.location.forward();
  }

}
