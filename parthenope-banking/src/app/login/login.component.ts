import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string | null = null;
  isLoading = false;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  forgotPassword(event: Event): void {
    event.preventDefault();
    // Implementazione per il recupero password
    alert('Funzionalità di recupero password in fase di implementazione');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Marca tutti i campi come touched per mostrare gli errori
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.loginError = null;
    this.isLoading = true;

    const { username, password } = this.loginForm.value;

    // Utilizzo del servizio di autenticazione simulato
    this.authService.login(username, password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.loginError = 'Credenziali non valide';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.loginError = 'Si è verificato un errore durante l\'accesso. Riprova più tardi.';
        this.isLoading = false;
        console.error('Login error:', error);
      }
    });
  }