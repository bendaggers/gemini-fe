import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FeesService } from '../services/fees.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  order: string | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  update() {
    const orderValue = this.order !== null ? this.order.toString() : 'BUY';
    this.feesService.updateOrder(orderValue.toUpperCase());

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.order = orderValue.toUpperCase();
  }

  reset() {
    this.order = null;
  }
}
