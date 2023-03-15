import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { TransactiondataService } from 'src/app/services/transactiondata.service';
import { TransactionData } from 'src/app/interface/transaction-data';

import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TxndateComponent } from './txndate/txndate.component';
import { BrokerComponent } from './broker/broker.component';
import { OrderComponent } from './order/order.component';
import { TickerComponent } from './ticker/ticker.component';
import { SharepriceComponent } from './shareprice/shareprice.component';
import { QuantityComponent } from './quantity/quantity.component';
import { NgForm } from '@angular/forms';

import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: any = [];

  @ViewChild(TransactionListComponent)
  transactionListComponent!: TransactionListComponent;

  constructor(
    private httpService: HttpService,
    private transactiondataService: TransactiondataService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  @Output() onSubmitSuccess = new EventEmitter<string>();

  transaction: TransactionData = {
    txndate: '',
    order: '',
    broker: '',
    ticker: '',
    quantity: 0,
    shareprice: 0,
  };

  onSubmit(): void {
    this.httpService
      .postTransaction(
        (this.transaction = {
          txndate: this.transactiondataService.getTransaction().txndate,
          order: this.transactiondataService.getTransaction().order,
          broker: this.transactiondataService.getTransaction().broker,
          ticker: this.transactiondataService.getTransaction().ticker,
          quantity: this.transactiondataService.getTransaction().quantity,
          shareprice: this.transactiondataService.getTransaction().shareprice,
        })
      )
      .subscribe(
        (response) => {
          // Update Transaction List
          this.transactionListComponent.ngOnInit();

          // This will clear the Form.
          this.clear();

          // Toast!
          this.toastService.show(
            'Transaction Saved!',
            `You ${this.transaction.order ? 'bought ' : 'sold '} ${
              this.transaction.quantity
            } shares of ${this.transaction.ticker} @ ${
              this.transaction.shareprice
            }`,
            'success'
          );
        },
        (error) => {
          // Toast!
          this.toastService.show(
            'Ooops, Error!',
            'Please complete the form before submitting!',
            'danger'
          );
        }
      );

    // This will Reset Input Values stored in memory.
    this.resetInputValues();
  }

  logTxnDate(): void {
    console.log(this.transactiondataService.getTransaction().txndate);
  }

  @ViewChild(TxndateComponent)
  txndateComponent!: TxndateComponent;

  @ViewChild(BrokerComponent)
  brokerComponent!: BrokerComponent;

  @ViewChild(OrderComponent)
  orderComponent!: OrderComponent;

  @ViewChild(TickerComponent)
  tickerComponent!: TickerComponent;

  @ViewChild(SharepriceComponent)
  sharepriceComponent!: SharepriceComponent;

  @ViewChild(QuantityComponent)
  quantityComponent!: QuantityComponent;

  clear(): void {
    this.txndateComponent.clearTxnDate();
    this.brokerComponent.clearBroker();
    this.orderComponent.clearOrder();
    this.tickerComponent.clearTicker();
    this.sharepriceComponent.clearShareprice();
    this.quantityComponent.clearQuantity();
  }

  resetInputValues() {
    this.transactiondataService.changeTxnDate('');
    this.transactiondataService.changeBroker('');
    this.transactiondataService.changeOrder('');
    this.transactiondataService.changeTicker('');
    this.transactiondataService.changeSharePrice(0);
    this.transactiondataService.changeQuantity(0);
  }
}
