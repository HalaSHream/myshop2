import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductItemComponent],
  template: `
    <h2>Products</h2>
    <div class="grid">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (addToCart)="handleAddToCart($event)">
      </app-product-item>
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

    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      max-width: 1200px;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  handleAddToCart(product: Product) {
    // الآن يتم إضافة المنتج عبر CartService — هذا يجعل السلوك حقيقي وليس مجرد console.log
    this.cartService.addToCart(product);
  }
}
