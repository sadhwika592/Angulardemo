import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';

import { Employeecrud } from '../employeecrud/employeecrud';
import { Pipes } from '../pipes/pipes';
import { Parentdemo } from '../parentdemo/parentdemo';
import { Productlist } from '../productlist/productlist';
import { Employeeservice } from '../../employeeservice';
import { Employeecomponent } from '../employeecomponent/employeecomponent';
import { Stocks } from '../stocks/stocks';
import { UserCrud } from '../user-crud/user-crud';
import { Displayname } from '../displayname/displayname';
import { Formdemo1 } from '../formdemo1/formdemo1';
import { TemplateFormDemo1 } from '../template-form-demo1/template-form-demo1';
import { Modelformdemo1 } from '../modelformdemo1/modelformdemo1';
import { Registrationform } from '../registrationform/registrationform';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Carousel } from '../carousel/carousel';


@Component({
  selector: 'app-body',
  imports: [
    Navbar,
    Carousel,
    //Databinding,
    //Directives,
    //Employeecrud,
    //Pipes,
    //Productlist,
    //Parentdemo,
    //Employeecomponent
    //Stocks
    // UserCrud
    // Displayname
    // Formdemo1,
    // TemplateFormDemo1
    // Modelformdemo1
    // Registrationform
    // DynamicForm
    RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
