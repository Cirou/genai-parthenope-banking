import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: '<h1>Welcome to Home Page</h1>',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `]
})
export class HomeComponent {}