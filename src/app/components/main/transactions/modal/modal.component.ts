import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() contents!: any;
  constructor() {}

  ngOnInit(): void {}

  theShowModal(contents?: any) {
    if (contents) {
      this.contents = contents;
    }

    console.log(this.contents);

    $('#Modal').modal('show');
  }
}
