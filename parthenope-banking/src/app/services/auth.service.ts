@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }

  login(username: string, password: string): Promise<boolean> {
    // Simulating an API call with a Promise
    return new Promise((resolve) => {
      // Simple mock validation (in a real app, this would be an actual API request)
      setTimeout(() => {
        // For demo purposes, we'll accept a specific email/password combination
        if (username === 'user@example.com' && password === 'password') {
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          resolve(true);
        } else {
          this.isLoggedIn = false;
          localStorage.removeItem('isLoggedIn');
          resolve(false);
        }
      }, 1000); // Simulate network delay
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    // Check both in-memory state and localStorage (for page refreshes)
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }