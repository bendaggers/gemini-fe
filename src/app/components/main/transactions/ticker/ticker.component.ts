import { Component, OnInit } from '@angular/core';
import { FeesService } from '../services/fees.service';
import { HttpService } from 'src/app/services/http.service';
import { StockService } from '../services/stock.service';
import { Stock } from 'src/app/components/main/transactions/interface/stock-interface';

@Component({
  selector: 'ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
})
export class TickerComponent implements OnInit {
  options: string[] = [];

  suggestions: string[] = [];

  stTicker: string | null = null;

  constructor(
    private feesService: FeesService,
    private httpService: HttpService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((options) => {
      this.options = options.map((option) => option.ticker);
    });
    console.log(this.options);
  }

  filter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value === '') {
      this.suggestions = [];
    } else {
      this.suggestions = this.options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
    }
    this.stTicker = value;
  }

  selectSuggestion(suggestion: string) {
    this.stTicker = suggestion;
    this.suggestions = [];
    this.update();
  }

  update() {
    const stTickerValue = this.stTicker !== null ? this.stTicker : '';
    this.feesService.updatestTicker(stTickerValue);

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.stTicker = stTickerValue;
  }

  reset() {
    this.stTicker = null;
  }
}
