// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: any[] = [];

  addItem(item: any) {
    const existing = this.cartItems.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cartItems.push({ ...item });
    }
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}