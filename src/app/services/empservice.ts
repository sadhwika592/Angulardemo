import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empservice {
    private employees = [
    { eId: 1, name: 'sdhwika', sal: 5000 },
    { eId: 2, name: 'rahul', sal: 8000 },
    { eId: 3, name: 'akhil', sal: 7000 },
    { eId: 4, name: 'vanitha', sal: 9000 }
  ];
  private employeeSubject = new BehaviorSubject<any[]>(this.employees);
  readonly employeeObs = this.employeeSubject.asObservable();

  private nextId = 5;

  addEmp(empToAdd: any) {
    empToAdd.eId = ++this.nextId;
    this.employees.push(empToAdd);
    this.employeeSubject.next([...this.employees]);
  }

  deleteEmp(id: number) {
    this.employees = this.employees.filter(emp => emp.eId !== id);
    this.employeeSubject.next([...this.employees]);
  }







  
}
