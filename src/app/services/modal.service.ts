import { Component, Inject } from '@angular/core'; // added import

import { Injectable } from '@angular/core';
import {
  NgbModal,
  NgbModalRef,
  NgbModalOptions,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';

import { ExecutedTransaction } from '../interface/exe-transaction-data';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal(title: string, dynamicData?: any, content?: string): NgbModalRef {
    const options: NgbModalOptions = { size: 'lg', centered: true };
    const modalRef = this.modalService.open(ModalComponent, options);
    modalRef.componentInstance.title = title;
    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
    modalRef.componentInstance.body = dynamicData;
    return modalRef;
  }
}

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="modal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{ body }}</p>
      <p>TICKER: {{ body.ticker }}</p>
      <p>AVERAGE UNIT PRICE: {{ body.aveunitprice }}</p>
      <p>COMMISSIONS: {{ body.commission }}</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="modal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})
export class ModalComponent {
  title!: string;
  body!: ExecutedTransaction;

  constructor(@Inject(NgbActiveModal) public modal: NgbActiveModal) {}
}
