import { Injectable } from '@angular/core';
import { ModalComponent } from '../components/main/transactions/modal/modal.component';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalComponent: ModalComponent) {}

  showModalService(dataObj: any): void {
    // console.log('Modal Service: ' + JSON.stringify(dataObj));
    this.modalComponent.theShowModal(dataObj);
  }
}
