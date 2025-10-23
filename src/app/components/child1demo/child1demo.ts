import { Component } from '@angular/core';

@Component({
  selector: 'app-child1demo',
  imports: [],
  templateUrl: './child1demo.html',
  styleUrl: './child1demo.css',
  inputs:['a']
})
export class Child1demo {
  a:any;
  b:number= 200;

}
