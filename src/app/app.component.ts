import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <div class="logo">
        <h1>Mini Shop</h1>
      </div>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Products</a>
        <a routerLink="/cart" routerLinkActive="active">Cart</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background-color: #8866e1;
      color: #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .logo h1 {
      margin: 0;
      font-size: 1.8rem;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin-left: 20px;
      font-size: 1rem;
      position: relative;
      transition: color 0.3s;
    }

    nav a:first-child {
      margin-left: 0;
    }

    nav a::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.3s;
      position: absolute;
      bottom: -4px;
      left: 0;
    }

    nav a:hover::after {
      width: 100%;
    }

    nav a.active {
      font-weight: bold;
    }

    main {
      flex: 1;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    @media (max-width: 600px) {
      header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      nav a {
        margin-left: 0;
      }
    }
  `]
})
export class AppComponent {}
