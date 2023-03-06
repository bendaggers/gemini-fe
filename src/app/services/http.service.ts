import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionData } from '../interface/transaction-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://127.0.0.1:8000/api/transactions/';

  constructor(private http: HttpClient) {}

  // GET Transactions List
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postTransaction(transaction: TransactionData): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }
}
