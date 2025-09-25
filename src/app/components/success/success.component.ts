/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Order Successful 🎉</h2>
    <p>Thank you for your purchase!</p>
    <a routerLink="/">Back to Home</a>
  `
})
export class SuccessComponent {}
*/


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="success-page">
      <div class="card">
        <div class="icon-wrap" aria-hidden>
          <svg class="checkmark" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="none"/>
            <path d="M14 27 l8 8 16-18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h1 class="headline">Your request has been successfully submitted!</h1>
        <p class="sub"> Thank you — we are now preparing your order and it will be shipped soon</p>

        <div class="summary">
          <p><strong>Order ID </strong> <span class="muted">#{{ orderId }}</span></p>
          <p><strong>Total price</strong> <span class="muted">\${{ total }}</span></p>
          <p><strong>Number of items</strong> <span class="muted">{{ itemsCount }}</span></p>
        </div>

        <div class="actions">
          <button (click)="goHome()" class="btn primary">Back Home </button>

        </div>

        <p class="note">An order receipt has been sent to your email.</p>
      </div>

      <div class="confetti" aria-hidden></div>
    </div>
  `,
  styles: [
    `
    :host { display:block; min-height:100vh; font-family: Inter, system-ui, Arial, sans-serif; background: linear-gradient(180deg,#f7fbff 0%, #ffffff 100%); padding:60px 20px; }
    .success-page { display:flex; justify-content:center; align-items:center; gap:20px; }
    .card { width:100%; max-width:760px; background:#fff; padding:36px; border-radius:16px; box-shadow:0 14px 40px rgba(2,6,23,0.08); text-align:center; position:relative; overflow:visible; }

    .icon-wrap { width:96px; height:96px; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; border-radius:50%; background: linear-gradient(180deg,#ecfdf5, #d1fae5); box-shadow:0 8px 24px rgba(16,185,129,0.12); }
    .checkmark { width:64px; height:64px; stroke: #059669; stroke-width:4; fill:none; stroke-dasharray:100; stroke-dashoffset:100; animation: draw 0.7s ease forwards; }
    @keyframes draw { to { stroke-dashoffset:0; } }

    .headline { font-size:1.6rem; color:#0f172a; margin:6px 0 8px; }
    .sub { color:#475569; margin:0 0 18px; }

    .summary { display:flex; justify-content:center; gap:18px; margin:16px 0 22px; flex-wrap:wrap; }
    .summary p { margin:0; color:#334155; font-size:0.98rem; }
    .muted { color:#64748b; margin-left:8px; }

    .actions { display:flex; gap:12px; justify-content:center; margin-bottom:12px; }
    .btn { padding:10px 16px; border-radius:10px; border:none; cursor:pointer; font-weight:600; }
    .primary { background: linear-gradient(90deg,#06b6d4,#0891b2); color:#fff; }
    .outline { background:transparent; border:1px solid #e6eef8; color:#0f172a; }

    .note { color:#94a3b8; font-size:0.9rem; margin-top:6px; }

    /* confetti effect (simple, CSS-only) */
    .confetti { pointer-events:none; position:fixed; left:50%; top:30%; width:0; height:0; }
    .confetti::before, .confetti::after { content:''; position:absolute; width:14px; height:14px; border-radius:2px; transform: translateX(-50%); animation: fall 2.2s linear infinite; }
    .confetti::before { left:-40px; background:#f97316; animation-delay:0.1s; }
    .confetti::after { left:40px; background:#f43f5e; animation-delay:0.4s; }
    @keyframes fall { 0% { transform: translateY(-10vh) rotate(0deg) } 100% { transform: translateY(80vh) rotate(360deg); opacity:0 } }

    @media (max-width:720px) { .card { padding:22px; border-radius:12px; } .headline{ font-size:1.3rem } }
    `
  ]
})
export class SuccessComponent {
  total: number | null = null;
  itemsCount: number | null = null;
  orderId: string | null = null;

  constructor(private router: Router) {
    // history.state يحتوي البيانات المرسلة عبر router.navigate(..., { state })
    const s = (this.router.getCurrentNavigation()?.extras.state ?? (window.history.state || {})) as any;
    // safer fallback to window.history.state in case of SSR or missing navigation object
    this.total = s.total ?? null;
    this.itemsCount = s.itemsCount ?? null;
    this.orderId = s.orderId ?? null;
  }

  goHome() { this.router.navigate(['/']); }
}
