import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { TransactiondataService } from 'src/app/services/transactiondata.service';
import { NotificationService } from 'src/app/services/notification.service';

import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TxndateComponent } from './txndate/txndate.component';
import { BrokerComponent } from './broker/broker.component';
import { OrderComponent } from './order/order.component';
import { TickerComponent } from './ticker/ticker.component';
import { SharepriceComponent } from './shareprice/shareprice.component';
import { QuantityComponent } from './quantity/quantity.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transaction: any;
  transactions: any = [];

  @ViewChild(TransactionListComponent)
  transactionListComponent!: TransactionListComponent;

  constructor(
    private httpService: HttpService,
    private transactiondataService: TransactiondataService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  @Output() onSubmitSuccess = new EventEmitter<string>();

  onSubmit(): void {
    // this.updateTransactionObject();
    // this.httpService
    //   .postTransaction(this.transactiondataService.getTransaction())
    //   .subscribe(
    //     (response) => {
    //       this.transactionListComponent.ngOnInit();
    //       this.clear(); // Clear Input Fields
    //     },
    //     (error) => {
    //       console.error(error);
    //       console.log(this.transactiondataService.getTransaction());
    //     }
    //   );
    this.notificationService.showToast('Hello World!');
  }

  updateTransactionObject(): void {
    // Set the value of the txnDate
    const txnDate = this.transactiondataService.getTxnDate();
    this.transactiondataService.changeTxnDate(txnDate);

    // Set the value of the order
    const order = this.transactiondataService.getOrder();
    this.transactiondataService.changeOrder(order);
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
}
