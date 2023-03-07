import { Component, OnInit } from '@angular/core';
import { TransactiondataService } from 'src/app/services/transactiondata.service';
import { StockService } from 'src/app/services/stockdata.service';
import { Stock } from 'src/app/interface/stock-data';

@Component({
  selector: 'ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
})
export class TickerComponent implements OnInit {
  stocks: Stock[] = [];
  filteredStocks: Stock[] = [];
  invalidTicker = false;
  showSuggestions = false;

  constructor(
    private transactiondataservice: TransactiondataService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data: Stock[]) => {
      this.stocks = data;
    });
  }

  filterStocks(event: any): void {
    const query = event.target.value.toLowerCase();

    if (!query) {
      this.filteredStocks = [];
      this.invalidTicker = false;
      return;
    }

    const filtered = this.stocks.filter(
      (stock) => stock.ticker.toLowerCase().indexOf(query) !== -1
    );
    this.filteredStocks = filtered;
    this.invalidTicker = filtered.length === 0;
  }

  selectStock(stock: Stock): void {
    const tickerInput = document.getElementById('Ticker') as HTMLInputElement;
    tickerInput.value = stock.ticker;
    this.filteredStocks = [];
    this.invalidTicker = false;
    this.transactiondataservice.changeTicker(stock.ticker);
  }

  // Add onFocus() and onBlur() methods to update the flag
  onFocus(): void {
    this.showSuggestions = true;
  }

  onBlur(): void {
    this.showSuggestions = false;
  }
}
