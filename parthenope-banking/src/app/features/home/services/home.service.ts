import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getAccountSummary(): Observable<any> {
    return of({
      balance: 25000.50,
      currency: 'EUR',
      lastUpdate: new Date()
    });
  }

  getRecentTransactions(): Observable<any[]> {
    return of([
      {
        id: 1,
        date: new Date(),
        description: 'Grocery Store',
        amount: -45.30,
        type: 'debit'
      },
      {
        id: 2,
        date: new Date(),
        description: 'Salary',
        amount: 2500.00,
        type: 'credit'
      }
    ]);
  }

  getNotifications(): Observable<any[]> {
    return of([
      {
        id: 1,
        type: 'info',
        message: 'Welcome to Parthenope Banking',
        date: new Date()
      }
    ]);
  }
}