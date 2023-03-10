import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;
declare var $: any;
import { DecimalPipe } from '@angular/common';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'modal-transaction',
  templateUrl: './modal-transaction.component.html',
  styleUrls: ['./modal-transaction.component.scss'],
  providers: [DecimalPipe],
})
export class ModalTransactionComponent implements OnInit {
  @Input() contents!: any;

  @Input() modalTitle!: HTMLElement;
  @Input() modalBody!: HTMLElement;
  @Input() modalButton!: HTMLElement;

  constructor(private httpService: HttpService) {
    // Assign the injected HttpService to the httpService property
    this.httpService = httpService;
  }

  ngOnInit(): void {}

  theShowModal(contents?: any) {
    if (contents) {
      this.contents = contents;
    }
  }

  modalMeta(contents?: any) {
    if (contents) {
      this.contents = contents;
    }

    this.modalButton = document.createElement('div');
    this.modalButton.innerHTML = `
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
      </button>
    `;

    this.modalTitle = document.createElement('div');
    this.modalTitle.innerHTML = `
      <div class="modal-title" #title>
        <h1 class="fw-bold mb-0">${this.contents?.ticker}</h1>
      </div>
    `;

    function formatNumber(
      value: number | undefined | null,
      decimalPlaces = 4
    ): string {
      if (value == null) {
        return '';
      }
      const decimalPipe = new DecimalPipe('en-US');
      const formatString = `1.${decimalPlaces}-${decimalPlaces}`;
      return decimalPipe.transform(value, formatString) ?? '';
    }

    this.modalBody = document.createElement('div');
    const shareprice = this.contents?.shareprice;
    const quantity = this.contents?.quantity;
    const aveunitprice = this.contents?.aveunitprice;
    const gross = this.contents?.gross;
    const commission = this.contents?.commission;
    const vat = this.contents?.vat;
    const pse = this.contents?.pse;
    const sccp = this.contents?.sccp;
    const salestax = this.contents?.salestax;
    const totalfees = this.contents?.totalfees;
    const totalcost = this.contents?.totalcost;

    this.modalBody.innerHTML = `
    <div class="modal-body">
    <table class="table table-borderless OrderSummary">
      <thead>
        <tr>
          <th class="ms-0 ps-0" colspan="2"></th>
        </tr>
      </thead>
      <tbody class="orderFees">
        <tr>
          <th scope="row">Quantity:</th>
          <td class="text-end">
          ${formatNumber(quantity, 0)}
          </td>
        </tr>

        <tr>
          <th scope="row">Share Price:</th>
          <td class="text-end">
            ${formatNumber(shareprice)}
          </td>
        </tr>

        <tr>
          <th scope="row">Average Unit Price:</th>
          <td class="text-end">
            ${formatNumber(aveunitprice, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row">Gross Amount:</th>
          <td class="text-end">
          ${formatNumber(gross, 4)}
          </td>
        </tr>
        <tr>
          <th scope="row" colspan="2">
            <h5 class="fw-bold mb-0">Fees</h5>
          </th>
        </tr>

        <tr>
          <th scope="row">Commissions:</th>
          <td class="text-end">
            ${formatNumber(commission, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row">VAT:</th>
          <td class="text-end">
          ${formatNumber(commission, 4)}
          </td>
        </tr>
        <tr>
          <th scope="row">PSE Fees:</th>
          <td class="text-end">
          ${formatNumber(pse, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row">SCCP Fees:</th>
          <td class="text-end">
          ${formatNumber(sccp, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row">Sales Tax:</th>
          <td class="text-end">
          ${formatNumber(salestax, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row">Total Fees:</th>

          <td class="text-end">
          ${formatNumber(totalfees, 4)}
          </td>
        </tr>

        <tr>
          <th scope="row"><h4 class="fw-bold mb-0">Total Cost:</h4></th>
          <td class="text-end">
            <h5 class="fw-bold mb-0">
            ${formatNumber(totalcost, 4)}
            </h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
  }
}
