export interface TransactionData {
  txnDate: Date;
  broker: string;
  order: string;
  stTicker: string;
  shprice: number;
  quantity: number;
  gross: number;
  comm: number;
  vat: number;
  psetxn: number;
  sccp: number;
  salestax: number;
  totalfees: number;
  totalcost: number;
  aveUnitPrice: number;
}
