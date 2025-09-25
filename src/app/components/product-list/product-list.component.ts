import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Products</h2>
    <div class="grid">
      <div *ngFor="let product of products" class="card">
        <img [src]="product.image" [alt]="product.name" />
        <h3>{{ product.name }}</h3>
        <p>\${{ product.price }}</p>
        <a [routerLink]="['/product', product.id]" class="btn">View Details</a>
      </div>
    </div>
  `,


  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    .title {
      margin-bottom: 30px;
      font-size: 2rem;
      text-align: center;
      color: #333;
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      max-width: 1200px;
    }

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

    .card h3 {
      font-size: 1.2rem;
      margin: 10px 0;
      color: #333;
    }

    .card p {
      font-size: 1rem;
      color: #666;
      margin-bottom: 15px;
    }

    .btn {
      display: inline-block;
      padding: 8px 16px;
      background-color: #8866e1;
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    .btn:hover {
      background-color: #8866e1;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
