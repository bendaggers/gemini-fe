import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private transactiondataservice: TransactiondataService) {}

  ngOnInit(): void {
    this.updateOrder;
  }

  updateOrder(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const Order = inputElement?.value;
    if (Order) {
      this.transactiondataservice.changeOrder(Order);
    }
  }
}
