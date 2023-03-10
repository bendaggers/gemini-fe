import { Injectable } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalComponent: ModalComponent) {}

  // showModal(title: HTMLElement, Body: HTMLElement, CloseBtn, btnA?, btnB?, btnC?)
  showModalService(
    title: HTMLElement,
    body: HTMLElement,
    button: HTMLElement
  ): void {
    this.modalComponent.displayModal(title, body, button);
  }
}
