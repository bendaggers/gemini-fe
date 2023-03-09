import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  body: any;
  constructor() {}

  ngOnInit(): void {}

  theShowModal(dataObj: any) {
    this.body = dataObj;

    $('#Modal').modal('show');
    console.log(JSON.parse(dataObj));
  }
}
