import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  providers: [OrderByPipe], // Add OrderByPipe as a provider
})
export class TransactionListComponent implements OnInit {
  transactions!: any[];

  constructor(
    private httpService: HttpService,
    private orderByPipe: OrderByPipe
  ) {}

  ngOnInit(): void {
    this.httpService.getTransactions().subscribe(
      (data: any[]) => {
        this.transactions = this.orderByPipe.transform(data, 'txndate');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
