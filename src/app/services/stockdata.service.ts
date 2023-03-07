import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock-data';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://127.0.0.1:8000/api/stocks/';

  constructor(private http: HttpClient) {}

  // Define the method to get the stocks from the API
  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }
}
