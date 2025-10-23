import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2demo',
  imports: [],
  templateUrl: './child2demo.html',
  styleUrl: './child2demo.css',
  inputs:['aChild2','b'],
  outputs:['nameEvent']
})

export class Child2demo {
  aChild2: any;
  b:number | undefined;

  Name:string = "sadhwika";
  nameEvent = new EventEmitter();
  sendDataToParent(){
    this.nameEvent.emit(this.Name);
  }

}
