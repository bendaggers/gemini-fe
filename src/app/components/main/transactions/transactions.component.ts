import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { TxndateComponent } from './txndate/txndate.component';
import { BrokerComponent } from './broker/broker.component';
import { OrderComponent } from './order/order.component';
import { TickerComponent } from './ticker/ticker.component';
import { QuantityComponent } from './quantity/quantity.component';
import { PriceComponent } from './price/price.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  newTransaction: any = {};
  transactions: any[] = [];

  @ViewChild(TransactionlistComponent)
  transactionListComponent!: TransactionlistComponent;

  @ViewChild(TxndateComponent)
  txndateComponent!: TxndateComponent;

  @ViewChild(BrokerComponent)
  brokerComponent!: BrokerComponent;

  @ViewChild(OrderComponent)
  orderComponent!: OrderComponent;

  @ViewChild(TickerComponent)
  tickerComponent!: TickerComponent;

  @ViewChild(QuantityComponent)
  quantityComponent!: QuantityComponent;

  @ViewChild(PriceComponent)
  priceComponent!: PriceComponent;

  ngOnInit() {}
  constructor(private httpService: HttpService) {}

  createTransaction() {
    const formData = this.httpService.getFormData();

    this.httpService.createTransaction(formData).subscribe(
      (data) => {
        this.transactions.push(data);
        this.newTransaction = {};

        // Console Message
        console.log('Transactions Saved To Database!');

        this.transactionListComponent.ngOnInit();
        this.resetall();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetall() {
    const txndateComponent = document.querySelector('txndate');
    this.txndateComponent.reset();

    const brokerComponent = document.querySelector('broker');
    this.brokerComponent.reset();

    const orderComponent = document.querySelector('order');
    this.orderComponent.reset();

    const tickerComponent = document.querySelector('ticker');
    this.tickerComponent.reset();

    const quantityComponent = document.querySelector('qty');
    this.quantityComponent.reset();

    const priceComponent = document.querySelector('price');
    this.priceComponent.reset();
  }
}
