import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transaction: any;

  constructor(
    private httpService: HttpService,
    private transactiondataService: TransactiondataService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.updateTransactionObject();

    this.httpService
      .postTransaction(this.transactiondataService.getTransaction())
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
          console.log(this.transactiondataService.getTransaction());
        }
      );

    console.log(this.transactiondataService.getTxnDate());
    console.log(this.transactiondataService.getOrder());
  }

  updateTransactionObject(): void {
    // Set the value of the txnDate
    const txnDate = this.transactiondataService.getTxnDate();
    this.transactiondataService.changeTxnDate(txnDate);

    // Set the value of the order
    const order = this.transactiondataService.getOrder();
    this.transactiondataService.changeOrder(order);
  }
}
