import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product" class="container">
      <div class="image-wrapper">
        <img [src]="product.image" [alt]="product.name" />
      </div>
      <div class="details">
        <h2>{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <p class="price">\${{ product.price }}</p>
        <button class="btn" (click)="addToCart()">Add to Cart</button>
      </div>
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
      display: flex;
      flex-direction: row;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      width: 100%;
      overflow: hidden;
      gap: 40px;
      padding: 20px;
    }

    .image-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-wrapper img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 15px;
      object-fit: cover;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .image-wrapper img:hover {
      transform: scale(1.05);
    }

    .details {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .details h2 {
      font-size: 2rem;
      margin-bottom: 15px;
      color: #333;
    }

    .description {
      font-size: 1rem;
      margin-bottom: 20px;
      color: #555;
      line-height: 1.5;
    }

    .price {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 30px;
      color: #131313;
    }

    .btn {
      padding: 12px 25px;
      background-color: #8866e1;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
      align-self: start;
    }

    .btn:hover {
      background-color: #8866e1;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .image-wrapper img {
        max-width: 100%;
      }

      .details {
        text-align: center;
      }

      .btn {
        align-self: center;
      }
    }
  `]
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
