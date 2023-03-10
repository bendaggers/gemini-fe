import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { ModalService } from 'src/app/services/modal.service';
import { ModalTransactionComponent } from '../modal-transaction/modal-transaction.component';

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
    private modalTransactionComponent: ModalTransactionComponent
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

        // this.modalTransactionComponent.theShowModal();

        // Let's try this
        console.log(data.ticker);

        const modalTransactionComponent = new ModalTransactionComponent(
          this.httpService
        );
        modalTransactionComponent.modalMeta(data);

        this.modalService.showModalService(
          modalTransactionComponent.modalTitle,
          modalTransactionComponent.modalBody,
          modalTransactionComponent.modalButton
        );
        // this.modalService.showModalService(data.ticker, data.ticker, true);
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

  onDelete(txnId: string): void {
    this.httpService.deleteTransactionById(txnId).subscribe(
      () => {
        // Do something after the transaction is deleted, such as refreshing the transaction list.
        this.displayTransactionList(); // refresh the transaction list
      },
      (error: any) => {
        console.error(`Failed to delete transaction ${txnId}: ${error}`);
      }
    );
  }
}
