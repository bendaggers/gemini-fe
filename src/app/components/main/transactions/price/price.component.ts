import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { FeesService } from '../services/fees.service';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  number = 0;
  shprice: number | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  onInputChange(event: any) {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) {
      this.number = 0;
    } else {
      this.number = parseFloat(value.toFixed(3));
    }
    console.log(this.number);
  }

  update() {
    const shpriceValue = this.shprice !== null ? this.shprice : 0;
    this.feesService.updateShPrice(shpriceValue);

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.shprice = shpriceValue;
  }

  reset() {
    this.shprice = null;
  }
}
