import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Reset any previous session
    this.authService.logout();
  }

  // Getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.loginError = '';

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f['username'].value, this.f['password'].value)
      .then(success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.loginError = 'Credenziali non valide';
        }
      })
      .catch(error => {
        this.loginError = 'Si è verificato un errore durante l\'accesso';
        console.error('Login error:', error);
      });
  }

  // Get error message for username field
  getUsernameErrorMessage(): string {
    if (this.f['username'].errors?.['required']) {
      return 'Inserire username';
    }
    if (this.f['username'].errors?.['email']) {
      return 'Inserire email valida';
    }
    return '';
  }

  // Get error message for password field
  getPasswordErrorMessage(): string {
    return this.f['password'].errors?.['required'] ? 'Inserire password' : '';
  }