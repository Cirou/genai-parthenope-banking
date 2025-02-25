import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Account } from '../models/account.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  getAccountDetails(): Observable<Account> {
    const mockAccount: Account = {
      id: '1',
      accountNumber: '1234567890',
      type: 'Conto Corrente',
      balance: 25000.50,
      currency: 'EUR',
      iban: 'IT60X0542811101000000123456',
      openingDate: new Date('2020-01-01'),
      lastUpdate: new Date()
    };

    return of(mockAccount).pipe(delay(1000));
  }

  getTransactions(): Observable<Transaction[]> {
    const mockTransactions: Transaction[] = [
      {
        id: '1',
        date: new Date('2024-01-15'),
        description: 'Stipendio',
        amount: 2500.00,
        type: 'credit',
        category: 'Stipendio',
        balance: 25000.50
      },
      {
        id: '2',
        date: new Date('2024-01-14'),
        description: 'Acquisto Supermercato',
        amount: -85.30,
        type: 'debit',
        category: 'Spesa',
        balance: 22500.50
      },
      {
        id: '3',
        date: new Date('2024-01-13'),
        description: 'Bonifico ricevuto',
        amount: 150.00,
        type: 'credit',
        category: 'Bonifico',
        balance: 22585.80
      }
    ];

    return of(mockTransactions).pipe(delay(1000));
  }
}