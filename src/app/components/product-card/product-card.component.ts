import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() themeColor = 'terracotta';
  @Output() addToInquiry = new EventEmitter<Product>();

  quantity = 1;

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  onAddToInquiry(): void {
    this.addToInquiry.emit(this.product);
  }
}
