import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionData } from '../interface/transaction-data';

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
    }
    return order;
  }

  private brokerSource = new BehaviorSubject<string>('');
  currentBroker = this.brokerSource.asObservable();

  changeBroker(Broker: string) {
    this.brokerSource.next(Broker);
  }

  getBroker(): string {
    const broker = this.brokerSource.getValue().toUpperCase();
    if (
      broker !== 'AAA EQUITIES' &&
      broker !== 'TIMSON TRADE' &&
      broker !== 'PHILSTOCKS FINANCIAL'
    ) {
      throw new Error(
        'Invalid Broker type. Only "AAA", "Philstocks" or "Timson" are allowed.'
      );
      // Insert Error functionality here!
    }
    return broker;
  }

  private tickerSource = new BehaviorSubject<string>('');
  currentTicker = this.tickerSource.asObservable();

  changeTicker(Ticker: string) {
    this.tickerSource.next(Ticker);
  }

  getTicker(): string {
    const ticker = this.tickerSource.getValue().toUpperCase();
    return ticker;
  }

  private quantitySource = new BehaviorSubject<number>(0);
  currentQuantity = this.quantitySource.asObservable();

  changeQuantity(Quantity: number) {
    this.quantitySource.next(Quantity);
  }

  getQuantity(): number {
    const quantity = this.quantitySource.getValue();
    if (quantity === 0 || quantity == null) {
      throw new Error('Enter Correct Quantity!');
      // Insert Error functionality here!
    }
    return quantity;
  }

  // SHARE PRICE

  private sharePriceSource = new BehaviorSubject<number>(0);
  currentSharePrice = this.sharePriceSource.asObservable();

  changeSharePrice(SharePrice: number) {
    this.sharePriceSource.next(SharePrice);
  }

  getSharePrice(): number {
    const SharePrice = this.sharePriceSource.getValue();
    if (SharePrice === 0 || SharePrice == null) {
      throw new Error('Enter correct Share Price!');
      // Insert Error functionality here!
    }
    return SharePrice;
  }

  //
  // Transaction Object
  //

  transaction: TransactionData = {
    txndate: '',
    order: '',
    broker: '',
    ticker: '',
    quantity: 0,
    shareprice: 0,
  };

  setTransaction(transaction: any): void {
    this.transaction = transaction;
  }

  getTransaction(): TransactionData {
    return {
      txndate: this.getTxnDate(),
      order: this.getOrder(),
      broker: this.getBroker(),
      ticker: this.getTicker(),
      quantity: this.getQuantity(),
      shareprice: this.getSharePrice(),
    };
  }
}
