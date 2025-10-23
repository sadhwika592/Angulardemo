import { Component } from '@angular/core';
import { Employeeservice } from '../../employeeservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecomponent',
  imports: [FormsModule],
  templateUrl: './employeecomponent.html',
  styleUrl: './employeecomponent.css'
})
export class Employeecomponent {

  empList: any[] = [];
  selected: string = 'allEmployees';

  constructor(private employeeservice: Employeeservice){
  }

  ngOnInit(){
    this.empList = this.employeeservice.getAllEmployees();
  }

  onDropChange(){
    if(this.selected ==='allEmployees'){
      this.empList = this.employeeservice.getAllEmployees();
    } else if (this.selected === 'maleEmployees'){
      this.empList = this.employeeservice.getMaleEmployees();
    } else if (this.selected === 'femaleEmployees'){
      this.empList = this.employeeservice.getFemaleEmployees();
    }
  }


}
