import { Component } from '@angular/core';
import { StockServices } from '../../services/stockservices';
import { Stock } from '../../models/stock';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-stocks',
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './stocks.html',
  styleUrl: './stocks.css'
})
export class Stocks {

  allStocks: Stock[] = [];
  isLoading : boolean = true;
  p: number = 1;

  constructor(private stockservices : StockServices){}

  ngOnInit(): void{
    this.stockservices.fetchAllStocks().subscribe({
      next: (data)=> this.allStocks = data,
      error : (err) => console.log(err)
    });

}
}
