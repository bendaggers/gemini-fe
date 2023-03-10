import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  providers: [OrderByPipe], // Add OrderByPipe as a provider
})
export class TransactionListComponent implements OnInit {
  @Input() transactions: any[] = [];

  newTransaction: any = {};

  constructor(
    private httpService: HttpService,
    private orderByPipe: OrderByPipe,
    private modalService: ModalService,
    private modalComponent: ModalComponent
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
  onRowClick(txnId: string) {
    // This will make a API GET Request to find the txnId of the clicked row and return the object.
    this.httpService.getTransactionById(txnId).subscribe(
      (data) => {
        // DATA OBJ
        this.modalBody = data;

        this.modalComponent.theShowModal();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  displayTransaction(txnId: string): void {}

  ngOnInit(): void {
    this.displayTransactionList();
  }
}
