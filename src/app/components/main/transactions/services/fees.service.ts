import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeesService {
  constructor() {}

  private orderSource = new Subject<string>();
  private quantitySource = new Subject<number>();
  private shPriceSource = new Subject<number>();
  private salestaxSource = new Subject<number>();
  private stTickerSource = new Subject<string>();
  private txnDateSource = new Subject<Date>();
  private brokerSource = new Subject<string>();

  order$ = this.orderSource.asObservable();
  qty$ = this.quantitySource.asObservable();
  price$ = this.shPriceSource.asObservable();
  salestax$ = this.salestaxSource.asObservable();
  stTicker$ = this.stTickerSource.asObservable();
  txnDate$ = this.txnDateSource.asObservable();
  broker$ = this.brokerSource.asObservable();

  updateTxnDate(txnDate: Date) {
    const date = new Date(txnDate);
    this.txnDateSource.next(date);
  }

  updateOrder(order: string) {
    this.orderSource.next(order);
  }

  updateBroker(broker: string) {
    this.brokerSource.next(broker);
  }

  updatestTicker(stTicker: string) {
    this.stTickerSource.next(stTicker);
  }

  updateQuantity(qty: number) {
    this.quantitySource.next(qty);
  }

  updateShPrice(shprice: number) {
    this.shPriceSource.next(shprice);
  }

  updateSalestax(salestax: number) {
    this.salestaxSource.next(salestax);
  }
}
