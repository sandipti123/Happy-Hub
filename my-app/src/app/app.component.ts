import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="home-container">
      <div class="background-image"></div>
      <div class="content">
        <h1>Welcome to our website!</h1>
        <button routerLink="/login">Login</button>
        <a routerLink="/products">View Products</a>
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
      background-image: url('/assets/homescreen.jpg');
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

    button,
    a {
      padding: 1rem 2rem;
      background-color: #fff;
      color: #000;
      border: none;
      border-radius: 4px;
      margin-bottom: 1rem;
      text-decoration: none;
    }

    button:hover,
    a:hover {
      background-color: #eaeaea;
    }
  `]
})
export class AppComponent {
}
