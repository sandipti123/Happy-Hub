import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <div class="background-image"></div>
      <div class="content">
        <h1>Welcome to our website!</h1>
        <button class="login-button" (click)="login()">Login</button>
        <a class="products-link" routerLink="/products">View Products</a>
        <a class="whatsapp-icon" href="https://api.whatsapp.com/send?phone=8917395814" target="_blank">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      position: relative;
      height: 100vh;
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/galaxy-image.jpg');
      background-size: cover;
      background-position: center;
      opacity: 0.7; /* Adjust the opacity as desired */
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      z-index: 1;
    }

    h1 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 1rem;
    }

    .login-button {
      padding: 1rem 2rem;
      background-color: #fff;
      color: #000;
      border: none;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .products-link {
      padding: 0.5rem 1rem;
      background-color: #fff;
      color: #000;
      border: none;
      border-radius: 4px;
      text-decoration: none;
    }

    .whatsapp-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background-color: green;
      color: #fff;
      border-radius: 50%;
      text-decoration: none;
      font-size: 1.5rem;
    }
  `]
})
export class HomeComponent {
  login() {
    // Implement your login functionality here
  }
}
