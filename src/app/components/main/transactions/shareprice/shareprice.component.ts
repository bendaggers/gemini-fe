import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';

@Component({
  selector: 'shareprice',
  templateUrl: './shareprice.component.html',
  styleUrls: ['./shareprice.component.scss'],
})
export class SharepriceComponent implements OnInit {
  constructor(private transactiondataservice: TransactiondataService) {}

  ngOnInit(): void {
    this.updateSharePrice;
  }

  updateSharePrice(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const SharePrice = inputElement?.value;
    if (SharePrice) {
      const SharePriceNum = parseInt(SharePrice);
      this.transactiondataservice.changeSharePrice(SharePriceNum);
    }
  }

  clearShareprice(): void {
    const inputElement = document.getElementById(
      'Shareprice'
    ) as HTMLInputElement;
    inputElement.value = '';
  }
}
