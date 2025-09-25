/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Checkout</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>Name</label>
      <input formControlName="name" />
      <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched">
        Name must be at least 3 characters
      </div>

      <label>Email</label>
      <input formControlName="email" />
      <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
        Enter a valid email
      </div>

      <button type="submit" [disabled]="form.invalid">Place Order</button>
    </form>
  `
})
export class CheckoutComponent {
  // @ts-ignore
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]

  });

  constructor(private fb: FormBuilder, private cart: CartService, private router: Router) {}

  submit() {
    if (this.form.valid) {
      this.cart.clearCart();
      this.router.navigate(['/success']);
    }
  }
}
*/

/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Checkout</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>Name</label>
      <input formControlName="name" />
      <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched">
        Name must be at least 3 characters
      </div>

      <label>Email</label>
      <input formControlName="email" />
      <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
        Enter a valid email
      </div>

      <button type="submit" [disabled]="form.invalid">Place Order</button>
    </form>
  `
})
export class CheckoutComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private cart: CartService, private router: Router) {
    // هنا بعد الحقن نهيئ الفورم
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.valid) {
      this.cart.clearCart();
      this.router.navigate(['/success']);
    }
  }
}*/



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="checkout-page">
      <div class="card">
        <h1 class="title">Complete your order</h1>

        <div class="content">
          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="field-row">
              <label for="name">Full name</label>
              <input id="name" formControlName="name" placeholder="e.g. Lina Ahmed" />
              <p class="error" *ngIf="form.get('name')?.invalid && form.get('name')?.touched">
                Name must be at least 3 characters
              </p>
            </div>

            <div class="field-row">
              <label for="email">Email</label>
              <input id="email" formControlName="email" placeholder="you@example.com" />
              <p class="error" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
                Enter a valid email
              </p>
            </div>

            <div class="field-row">
              <label for="notes">Order notes (optional)</label>
              <textarea id="notes" formControlName="notes" placeholder="Delivery instructions..." rows="3"></textarea>
            </div>

            <div class="actions">
              <button type="button" class="secondary" (click)="router.navigate(['/cart'])">Back to cart</button>
              <button type="submit" class="primary" [disabled]="form.invalid">Place order</button>
            </div>
          </form>

          <aside class="summary">
            <h3>Order summary</h3>
            <div class="summary-body">
              <p class="line"><span>Items</span><span>{{ cartTotalItems }} items</span></p>
              <p class="line"><span>Subtotal</span><span>\${{ total }}</span></p>
              <p class="line small"><span>Shipping</span><span>Calculated at next step</span></p>
            </div>
            <div class="summary-footer">
              <p class="total">Total <strong>\${{ total }}</strong></p>
            </div>
          </aside>
        </div>

      </div>
    </div>
  `,
  styles: [
    `
    :host { display: block; padding: 40px 20px; font-family: Inter, system-ui, Arial, sans-serif; background: linear-gradient(180deg, #f6f8fb 0%, #ffffff 100%); min-height: 100vh; }

    .checkout-page { display:flex; justify-content:center; }

    .card { width:100%; max-width:1100px; background: #ffffff; border-radius: 14px; box-shadow: 0 10px 30px rgba(16,24,40,0.08); padding: 28px; }

    .title { font-size: 1.6rem; margin: 0 0 18px; color: #0f172a; text-align: left; }

    .content { display: grid; grid-template-columns: 1fr 360px; gap: 26px; align-items: start; }

    form { display:flex; flex-direction:column; gap:14px; }

    .field-row { display:flex; flex-direction:column; }
    label { font-size:0.9rem; color: #334155; margin-bottom:6px; }
    input, textarea { border: 1px solid #e6eef8; padding: 12px 14px; border-radius:10px; font-size:0.95rem; outline: none; transition: box-shadow 0.15s, border-color 0.15s; }
    input:focus, textarea:focus { box-shadow: 0 6px 20px rgba(2,6,23,0.08); border-color: #60a5fa; }

    .error { color: #dc2626; font-size:0.85rem; margin-top:6px; }

    .actions { display:flex; gap:12px; justify-content:flex-end; margin-top:10px; }
    .primary { background: linear-gradient(90deg,#10b981,#059669); border:none; color:#fff; padding:10px 18px; border-radius:10px; font-weight:600; cursor:pointer; box-shadow: 0 6px 18px rgba(6,95,70,0.12); }
    .primary[disabled] { opacity:0.55; cursor:not-allowed; box-shadow:none; }
    .secondary { background:transparent; border:1px solid #e6eef8; padding:10px 16px; border-radius:10px; cursor:pointer; }

    aside.summary { background:#fbfdff; border:1px solid #eef3ff; padding:18px; border-radius:12px; }
    aside h3 { margin:0 0 12px; color:#0f172a; }
    .summary-body { display:flex; flex-direction:column; gap:8px; }
    .line { display:flex; justify-content:space-between; color:#475569; }
    .line.small { font-size:0.9rem; color:#94a3b8; }
    .summary-footer { border-top:1px dashed #e6eef8; margin-top:12px; padding-top:12px; }
    .total { display:flex; justify-content:space-between; align-items:center; font-size:1.1rem; }

    @media (max-width: 880px) {
      .content { grid-template-columns: 1fr; }
      aside.summary { order: -1; margin-bottom: 10px; }
    }
    `
  ]
})
export class CheckoutComponent {
  form!: FormGroup;
  total = 0;
  cartTotalItems = 0;

  constructor(private fb: FormBuilder, private cart: CartService, public router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      notes: ['']
    });


    try {
      this.total = this.cart.getTotal() ?? 0;
      const cart = this.cart.getCart() ?? [];
      this.cartTotalItems = Array.isArray(cart) ? cart.length : 0;
    } catch (e) {
      this.total = 0;
      this.cartTotalItems = 0;
    }
  }

  // داخل CheckoutComponent.submit()
  submit() {
    if (this.form.valid) {
      const total = this.cart.getTotal();
      const itemsCount = this.cart.getCart().length;
      const orderId = Date.now().toString(36).toUpperCase().slice(-6);

      // لو بدك تراسل للسيرفر ترسل الطلب هنا أولاً، ثم:
      this.cart.clearCart();
      this.router.navigate(['/success'], {
        state: { total, itemsCount, orderId }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
