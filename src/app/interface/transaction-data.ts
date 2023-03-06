export interface TransactionData {
  txndate: string | null;
  order: string;
  broker: string;
  ticker: string;
  quantity: number;
  shareprice: number;
  recdate: string;
  gross: number;
  commission: number;
  vat: number;
  pse: number;
  sccp: number;
  salestax: number;
  totalfees: number;
  totalcost: number;
  aveunitprice: number;
}
