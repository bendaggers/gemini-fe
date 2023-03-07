import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'txndate',
  templateUrl: './txndate.component.html',
  styleUrls: ['./txndate.component.scss'],
})
export class TxndateComponent implements OnInit {
  txnDate: string = '';

  constructor(private transactiondataservice: TransactiondataService) {}

  ngOnInit(): void {
    this.updateTxnDate;
  }

  updateTxnDate(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const txnDate = inputElement?.value;
    if (txnDate) {
      this.transactiondataservice.changeTxnDate(txnDate);
    }
  }

  clearTxnDate(): void {
    const inputElement = document.getElementById('txnDate') as HTMLInputElement;
    inputElement.value = '';
  }
}
