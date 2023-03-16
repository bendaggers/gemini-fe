import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  providers: [OrderByPipe],
})
export class TransactionListComponent implements OnInit {
  @Input() transactions: any[] = [];

  newTransaction: any = {};

  constructor(
    private httpService: HttpService,
    private orderByPipe: OrderByPipe,
    private modalService: ModalService
  ) {}

  displayTransactionList(): void {
    this.httpService.getTransactions().subscribe(
      (data: any[]) => {
        this.transactions = this.orderByPipe.transform(data, 'txndate');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modalBody!: string;
  onRowClick(txnId: number) {
    const filteredTxn = this.transactions.find((t) => t.txnid === txnId);

    // Open Modal
    this.modalService.openModal(filteredTxn.ticker, filteredTxn);
  }

  displayTransaction(txnId: string): void {}

  ngOnInit(): void {
    this.displayTransactionList();
  }
}
