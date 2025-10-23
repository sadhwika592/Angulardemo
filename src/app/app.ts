import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Databinding } from './components/databinding/databinding';
import { Directives } from './components/directives/directives';
import { Employeecrud } from './components/employeecrud/employeecrud';
import { Pipes } from './components/pipes/pipes';
import { Parentdemo } from './components/parentdemo/parentdemo';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, Navbar, Categories, Carousel,*/ 
    Body, Footer, /*Databinding, Directives,*/  /*Employeecrud, Pipes*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1');
}
