import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Your Cart</h2>
      <div *ngIf="cart.length; else empty">
        <div class="cart-item" *ngFor="let item of cart; let i = index">
          <div class="item-info">
            <img [src]="item.image" [alt]="item.name" class="item-image" />
            <div>
              <p class="name">{{ item.name }}</p>
              <p class="price">\${{ item.price }}</p>
            </div>
          </div>
          <button class="remove-btn" (click)="remove(i)">Remove</button>
        </div>
        <div class="total">
          <p>Total: <strong>\${{ total }}</strong></p>
          <a routerLink="/checkout" class="checkout-btn">Go to Checkout</a>
        </div>

        <!-- رسالة نجاح -->
        <div *ngIf="message" class="success-message">
          {{ message }}
        </div>
      </div>
      <ng-template #empty>
        <p class="empty-text">Your cart is empty</p>
      </ng-template>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      min-height: 100vh;
    }

    .container {
      width: 100%;
      max-width: 800px;
      background-color: #fff;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
      color: #333;
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f9f9f9;
      padding: 15px 20px;
      border-radius: 10px;
      margin-bottom: 15px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
    .item-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 10px;
      flex-shrink: 0;
    }
    .cart-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .name {
      font-weight: bold;
      font-size: 1.1rem;
      color: #333;
    }

    .price {
      color: #007bff;
      font-size: 1rem;
      margin-top: 5px;
    }

    .remove-btn {
      background-color: #ff4d4d;
      border: none;
      color: #fff;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.2s;
    }

    .remove-btn:hover {
      background-color: #cc0000;
      transform: translateY(-2px);
    }

    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      font-size: 1.2rem;
    }

    .checkout-btn {
      background-color: #28a745;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 10px;
      transition: background-color 0.3s, transform 0.2s;
    }

    .checkout-btn:hover {
      background-color: #1e7e34;
      transform: translateY(-2px);
    }

    .empty-text {
      text-align: center;
      font-size: 1.2rem;
      color: #666;
      padding: 20px 0;
    }

    .success-message {
      margin-top: 20px;
      background-color: #d4edda;
      color: #155724;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid #c3e6cb;
      font-size: 1rem;
      animation: fadeInOut 3s forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; }
    }

    @media (max-width: 600px) {
      .cart-item {
        flex-direction: column;
        align-items: flex-start;
      }

      .total {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  `]
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total = 0;
  message = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  remove(i: number) {
    this.cartService.removeFromCart(i);
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();

    this.message = '✅ The product has been removed from the cart';
    setTimeout(() => this.message = '', 3000);
  }
}
