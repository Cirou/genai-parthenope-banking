import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Simulazione di autenticazione
    // In una applicazione reale, qui ci sarebbe una chiamata HTTP a un servizio di backend
    const isValid = username === 'user@example.com' && password === 'ValidPass123';
    
    // Simula un ritardo nella risposta per mostrare il caricamento
    return of(isValid).pipe(
      delay(1000),
      // Imposta lo stato di autenticazione nel caso di successo
      tap(success => {
        this.isAuthenticated = success;
        if (success) {
          localStorage.setItem('isLoggedIn', 'true');
        }
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    // Controlla sia la variabile locale che il localStorage
    // In una applicazione reale, potrebbe verificare la validità di un token JWT
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }