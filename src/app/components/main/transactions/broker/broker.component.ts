import { Component, OnInit, ViewChild } from '@angular/core';
import { FeesService } from '../services/fees.service';
import { HttpService } from 'src/app/services/http.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss'],
})
export class BrokerComponent implements OnInit {
  broker: string | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  update() {
    const brokerValue = this.broker !== null ? this.broker.toString() : 'AAA';
    this.feesService.updateBroker(brokerValue.toUpperCase());

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.broker = brokerValue.toUpperCase();
  }

  reset() {
    this.broker = null;
  }
}
