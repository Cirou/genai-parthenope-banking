import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): Observable<boolean> {
    // Simulazione di autenticazione
    if (username === 'user@example.com' && password === 'password') {
      this.isAuthenticated = true;
      return of(true);
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}