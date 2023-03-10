import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  // @Input() title!: HTMLElement;
  // @Input() body!: HTMLElement;
  // @Input() CloseBtn!: HTMLElement;
  // @Input() btnA!: number;
  // @Input() btnB!: number;
  // @Input() btnC!: number;

  constructor() {}

  ngOnInit(): void {}

  displayModal(
    title: HTMLElement,
    body: HTMLElement,
    buttons: HTMLElement,
    actionBtnA?: boolean,
    actionBtnB?: boolean,
    actionBtnC?: boolean
  ) {
    const modalTitle = document.getElementById('modal-header');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');

    if (modalTitle && modalBody && modalFooter) {
      modalTitle.innerHTML = '';
      modalTitle.appendChild(title);

      modalBody.innerHTML = '';
      modalBody.appendChild(body);

      modalFooter.innerHTML = '';
      modalFooter.appendChild(buttons);
    }

    $('#Modal').modal('show');
  }
}
