import { Component, OnInit, Input } from '@angular/core';
import { FeesService } from '../services/fees.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'txnfees',
  templateUrl: './txnfees.component.html',
  styleUrls: ['./txnfees.component.scss'],
})
export class TxnfeesComponent implements OnInit {
  order: string = '';
  quantity: number = 0;
  shprice: number = 0;
  salestax: number = 0;
  ticker: string = '';
  txndate: string = '';
  broker: string = '';

  constructor(
    private feesService: FeesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.feesService.order$.subscribe((order) => {
      this.order = order;
      this.calculateFees();
    });

    this.feesService.broker$.subscribe((broker) => {
      this.broker = broker;
    });

    this.feesService.txnDate$.subscribe((txnDate: Date) => {
      const year = txnDate.getFullYear();
      const month = String(txnDate.getMonth() + 1).padStart(2, '0');
      const day = String(txnDate.getDate()).padStart(2, '0');
      this.txndate = `${year}-${month}-${day}`;
      this.calculateFees();
    });

    this.feesService.stTicker$.subscribe((ticker) => {
      this.ticker = ticker;
      this.calculateFees();
    });

    this.feesService.salestax$.subscribe((salestax) => {
      this.salestax = salestax;
    });

    this.feesService.qty$.subscribe((quantity) => {
      this.quantity = quantity;
      this.calculateFees();
    });

    this.feesService.price$.subscribe((shprice) => {
      this.shprice = shprice;
      this.calculateFees();
    });
  }

  gross: number = 0;
  comm: number = 0;
  vat: number = 0;
  psetxn: number = 0;
  sccp: number = 0;
  totalfees: number = 0;
  totalcost: number = 0;
  txorder: string = '';
  aveUnitPrice: number = 0;

  calculateFees() {
    this.gross = this.quantity * this.shprice;
    this.comm = this.gross * 0.0025;
    this.vat = this.comm * 0.12;
    this.psetxn = this.gross * 0.00005;
    this.sccp = this.gross * 0.0001;

    if (this.order == 'SELL') {
      this.salestax = this.gross * 0.006;
    } else {
      this.salestax = 0;
    }
    this.feesService.updateSalestax(this.salestax);

    if (this.order == 'SELL') {
      this.totalcost =
        this.gross -
        (this.comm + this.vat + this.psetxn + this.sccp + this.salestax);
    } else {
      this.totalcost =
        this.gross + this.comm + this.vat + this.psetxn + this.sccp;
    }

    this.totalfees =
      this.comm + this.vat + this.psetxn + this.sccp + this.salestax;
    this.aveUnitPrice = this.totalcost / this.quantity;

    // User input will be sent to parent through the service (HttpService) then
    this.httpService.gross = parseFloat(this.gross.toFixed(8));
    this.httpService.comm = parseFloat(this.comm.toFixed(8));
    this.httpService.vat = parseFloat(this.vat.toFixed(8));
    this.httpService.psetxn = parseFloat(this.psetxn.toFixed(8));
    this.httpService.sccp = parseFloat(this.sccp.toFixed(8));
    this.httpService.salestax = parseFloat(this.salestax.toFixed(8));
    this.httpService.totalfees = parseFloat(this.totalfees.toFixed(8));
    this.httpService.totalcost = parseFloat(this.totalcost.toFixed(8));
    this.httpService.aveUnitPrice = parseFloat(this.aveUnitPrice.toFixed(8));
  }
}
