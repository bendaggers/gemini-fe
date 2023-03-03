import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss'],
})
export class TransactionlistComponent implements OnInit {
  @Input() transactions: any[] = [];

  newTransaction: any = {};

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
