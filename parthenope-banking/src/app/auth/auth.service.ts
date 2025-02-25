import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    // Simulazione di chiamata API
    return of(username === 'test@test.com' && password === 'password').pipe(
      delay(1000)
    );
  }
}