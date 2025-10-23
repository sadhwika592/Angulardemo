import { Component /*ChangeDetectorRef*/ } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import {messages_array} from './constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecrud',
  imports: [FormsModule
  ],
  templateUrl: './employeecrud.html',
  styleUrls: ['./employeecrud.css'],
})

export class Employeecrud {
  //constructor(private cd: ChangeDetectorRef) {}

  employees = [
    { id: 1, name: 'Sadhwika Rachamalla', role: 'Developer', salary: 69000 },
    { id: 2, name: 'Bharathi Yelem', role: 'Manager', salary: 85000 },
    { id: 3, name: 'Vanitha Reddy', role: 'Tester', salary: 90000 },
    { id: 4, name: 'Akhil Mummadi', role: 'Data Engineer', salary: 98000 },
  ];

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(emp => emp.id !== id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }

  selectedEmployee: any = null;

  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    const modal_element = document.getElementById('employeeModal');
    if (modal_element) {
      const modal = new (window as any).bootstrap.Modal(modal_element);
      modal.show();
    }
  }

  newEmployee = {id : 0, name : '', role: '', salary: 0};

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.role && this.newEmployee.salary) {
      this.newEmployee.id = this.employees.length + 1;
      this.employees.push({ ...this.newEmployee });

      new Snackbar(messages_array.employee_add, {
        position: 'top-center',
        theme: 'light',
        timeout: 3000
      });

      this.newEmployee = { id: 0, name: '', role: '', salary: 0 };
    }
  }


}


