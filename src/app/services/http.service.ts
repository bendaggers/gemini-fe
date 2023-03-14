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

  // GET ALL Transactions and Display in TransactionListComponent
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST Transaction (User Input)
  postTransaction(transaction: TransactionData): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }

  // GET Single Transaction
  getTransactionById(txnId: string) {
    return this.http.get<any>(`${this.apiUrl}${txnId}`);
  }
}
