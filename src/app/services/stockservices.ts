import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockServices {
  private api_Url = "http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA";
  
  constructor(private httpclient : HttpClient){

  }

  fetchAllStocks() : Observable<Stock[]>{
    //return this.httpclient.get<Stock[]>(this.api_Url);
    //return this.httpclient.get<Stock[]>('https://httpstat.us/401');
    return this.httpclient.get<Stock[]>('https://dummyjson.com/http/500');
  }

}
