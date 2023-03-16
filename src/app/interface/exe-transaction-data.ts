export interface ExecutedTransaction {
  txnno: string;
  txndate: string | null;
  recdate: Date;
  broker: string;
  order: string;
  ticker: string;
  quantity: number;
  shareprice: number;
  gross: number;
  commission: number;
  vat: number;
  pse: number;
  sccp: number;
  salestax: number;
  totalcost: number;
  aveunitprice: number;
}
