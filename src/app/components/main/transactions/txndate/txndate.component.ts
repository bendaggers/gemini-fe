import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FeesService } from '../services/fees.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'txndate',
  templateUrl: './txndate.component.html',
  styleUrls: ['./txndate.component.scss'],
})
export class TxndateComponent implements OnInit {
  txnDate: Date | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  update() {
    const defaultDate = new Date('05/31/1984'); // Convert default date string to a Date object
    const txnDateValue = this.txnDate !== null ? this.txnDate : defaultDate;
    this.feesService.updateTxnDate(txnDateValue);

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.txnDate = txnDateValue;
  }

  reset() {
    this.txnDate = null;
  }
}
