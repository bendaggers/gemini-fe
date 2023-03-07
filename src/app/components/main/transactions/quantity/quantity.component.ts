import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit {
  constructor(private transactiondataservice: TransactiondataService) {}

  ngOnInit(): void {
    this.updateQuantity;
  }

  updateQuantity(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const Quantity = inputElement?.value;
    if (Quantity) {
      const quantityNum = parseInt(Quantity);
      this.transactiondataservice.changeQuantity(quantityNum);
    }
  }

  clearQuantity(): void {
    const inputElement = document.getElementById(
      'Quantity'
    ) as HTMLInputElement;
    inputElement.value = '';
  }
}
