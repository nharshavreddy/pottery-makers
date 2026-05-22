import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product, quantity: number = 1): void {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.cartSubject.next([...this.items]);
  }

  removeFromCart(productId: string): void {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.items]);
  }

  updateQuantity(productId: string, quantity: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.cartSubject.next([...this.items]);
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
    this.cartSubject.next([]);
  }

  generateWhatsAppMessage(name: string, email: string, phone: string): string {
    let message = `*New Order Inquiry*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n`;
    message += `*Selected Products:*\n`;
    this.items.forEach(item => {
      message += `- ${item.product.name} (${item.product.code}) x${item.quantity}\n`;
    });
    return encodeURIComponent(message);
  }
}
