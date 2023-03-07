import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss'],
})
export class BrokerComponent implements OnInit {
  constructor(private transactiondataservice: TransactiondataService) {}

  ngOnInit(): void {}

  updateBroker(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const Broker = inputElement?.value;
    if (Broker) {
      this.transactiondataservice.changeBroker(Broker);
    }
  }

  clearBroker(): void {
    const inputElement = document.getElementById('Broker') as HTMLInputElement;
    inputElement.value = 'Select Broker';
  }
}
