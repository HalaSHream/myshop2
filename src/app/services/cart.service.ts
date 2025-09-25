import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}
