import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://127.0.0.1:8000/api/transactions/';

  constructor(private http: HttpClient) {}

  // GET Transactions
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Collect Data from User Input Form
  txnDate: Date | null = null;
  broker: string | null = null;
  order: string | null = null;
  stTicker: string | null = null;
  shprice: number | null = null;
  quantity: number | null = null;
  gross: number | null = null;
  comm: number | null = null;
  vat: number | null = null;
  psetxn: number | null = null;
  sccp: number | null = null;
  salestax: number | null = null;
  totalfees: number | null = null;
  totalcost: number | null = null;
  aveUnitPrice: number | null = null;

  data = {};
  getFormData() {
    this.data = {
      recdate: '1984-05-31',
      txndate: this.txnDate,
      broker: this.broker,
      order: this.order,
      ticker: this.stTicker,
      shareprice: this.shprice,
      quantity: this.quantity,
      gross: this.gross,
      commission: this.comm,
      vat: this.vat,
      pse: this.psetxn,
      sccp: this.sccp,
      salestax: this.salestax,
      totalfees: this.totalfees,
      totalcost: this.totalcost,
      aveunitprice: this.aveUnitPrice,
    };
    return this.data;
  }

  // CREATE Transactions
  createTransaction(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
