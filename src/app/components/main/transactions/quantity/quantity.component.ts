import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FeesService } from '../services/fees.service';

@Component({
  selector: 'qty',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit {
  ngOnInit(): void {}

  quantity: number | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  update() {
    const quantityValue = this.quantity !== null ? this.quantity : 0;
    this.feesService.updateQuantity(quantityValue);

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.quantity = quantityValue;
  }

  reset() {
    this.quantity = null;
  }
}
