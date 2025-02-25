export interface Account {
  id: string;
  accountNumber: string;
  type: string;
  balance: number;
  currency: string;
  iban: string;
  openingDate: Date;
  lastUpdate: Date;
}