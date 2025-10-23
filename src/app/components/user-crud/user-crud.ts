import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  imports: [FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css'
})

export class UserCrud {

  isLoading: boolean = false;
  api_url = 'http://localhost:3000/employees';

  employees: any = [];

  empObj = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "gender": "",
      "salary": null,
      "id": null
    }

  constructor(private httpclient: HttpClient){
  }



  ngOnInit(){
    this.fetchAllEmployees()
  }

  fetchAllEmployees(){
    this.isLoading = true;
    this.httpclient.get(this.api_url).subscribe(
      (response)=>{
        this.isLoading = false;
        this.employees = response;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteEmp(id:any){ 
    this.httpclient.delete(`${this.api_url}/${id}`).subscribe(
      (response)=>{
        alert(`Employee ${id} deleted successfully :)`);
        this.fetchAllEmployees();
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  addNewEmp(){
    this.httpclient.post(this.api_url, this.empObj).subscribe(
      (response)=>{
        alert(`Employee added successfully :)`);
        this.fetchAllEmployees();
        this.resetForm();
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  resetForm(){
    this.empObj = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "gender": "",
      "salary": null,
      "id": null
    }
  }

}
