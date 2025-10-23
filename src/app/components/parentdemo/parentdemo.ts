import { Component } from '@angular/core';
import { Child2demo } from '../child2demo/child2demo';
import { Child1demo } from '../child1demo/child1demo';

@Component({
  selector: 'app-parentdemo',
  imports: [Child1demo, Child2demo],
  templateUrl: './parentdemo.html',
  styleUrl: './parentdemo.css'
})
export class Parentdemo {
  a=100;
  parentName:string = '';

  receiveDataFromChild(dataFromChild:any){
    this.parentName = dataFromChild;
  }

}
