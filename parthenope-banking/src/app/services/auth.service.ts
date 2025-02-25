import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Simulazione di autenticazione
    if (username === 'test@example.com' && password === 'password') {
      return of(true).pipe(delay(1000));
    }
    return throwError(() => new Error('Invalid credentials'));
  }
}