import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" class="form-control" [(ngModel)]="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" class="form-control" [(ngModel)]="password">
      </div>
      <button type="submit" class="btn btn-primary" (click)="submit()">Submit</button>
      <a routerLink="/forgot-password">Forgot Password?</a>
    </form>
  `,
  styles: []
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string

  constructor() {
    // Initialize the properties here if needed
  }

  submit() {
    // Implement your login functionality here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
