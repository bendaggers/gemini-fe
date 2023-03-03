import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions!: any[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTransactions().subscribe(
      (data: any[]) => {
        this.transactions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
