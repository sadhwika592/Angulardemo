import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //create one single instance of this service and share it everywhere in the app.
})
export class Employeeservice {
  employees = [
    { id: 1, name: 'Sadhwika', gender: 'Female', dept: 'IT' },
    { id: 2, name: 'Akhil', gender: 'Male', dept: 'HR' },
    { id: 3, name: 'Vanitha', gender: 'Female', dept: 'Finance' },
    { id: 4, name: 'Bharathi', gender: 'Female', dept: 'Admin' },
    { id: 4, name: 'Mohith', gender: 'Male', dept: 'Developer' },
    { id: 4, name: 'Revanth', gender: 'Male', dept: 'Manager' },
    { id: 4, name: 'Koushik', gender: 'Male', dept: 'Accounts' }
  ];

  getAllEmployees(){
    return this.employees;
  }

  getMaleEmployees(){
    return this.employees.filter(emp => emp.gender === 'Male');
  }

  getFemaleEmployees(){
    return this.employees.filter(emp => emp.gender === 'Female');
  }

  
  
}
