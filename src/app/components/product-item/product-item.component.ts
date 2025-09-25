import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <img [src]="product.image" [alt]="product.name" />
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price }}</p>
      <a [routerLink]="['/product', product.id]" class="btn">View Details</a>
      <button class="btn add" (click)="onAddToCart()">Add to Cart</button>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .card {
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 250px;
      text-align: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
    }
    .card h3 { font-size: 1.2rem; margin: 10px 0; color: #333; }
    .card p { font-size: 1rem; color: #666; margin-bottom: 15px; }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background-color: #8866e1;
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.2s;
      border: none;
      cursor: pointer;
      margin-right: 8px;
    }
    .btn.add {
      background-color: #28a745;
    }
    .btn:hover { opacity: 0.95; }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;

  // هذا المطلوب: يبعت المنتج للأب عند الضغط
  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
