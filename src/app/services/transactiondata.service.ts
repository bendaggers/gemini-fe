import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionData } from 'src/app/interface/transaction-data';

@Injectable({
  providedIn: 'root',
})
export class TransactiondataService {
  private txnDateSource = new BehaviorSubject<string>('');
  currentTxnDate = this.txnDateSource.asObservable();

  changeTxnDate(txnDate: string) {
    this.txnDateSource.next(txnDate);
  }

  getTxnDate(): string {
    return this.txnDateSource.value;
  }

  private orderSource = new BehaviorSubject<string>('');
  currentOrder = this.orderSource.asObservable();

  changeOrder(Order: string) {
    this.orderSource.next(Order);
  }

  getOrder(): string {
    const order = this.orderSource.getValue().toUpperCase();
    if (order !== 'BUY' && order !== 'SELL') {
      throw new Error('Invalid order type. Only "BUY" or "SELL" are allowed.');
      // Insert Error functionality here!
    }
    return order;
  }

  // Transaction Object
  getTransaction(): any {
    return {
      txndate: this.getTxnDate(),
      order: this.getOrder(),
      broker: 'AAA Equities',
      ticker: 'KKK',
      quantity: 300,
      shareprice: 30.5,
      recdate: '1984-05-31',
      gross: 1,
      commission: 1,
      vat: 1,
      pse: 1,
      sccp: 1,
      salestax: 1,
      totalfees: 1,
      totalcost: 1,
      aveunitprice: 1,
    };
  }
}
