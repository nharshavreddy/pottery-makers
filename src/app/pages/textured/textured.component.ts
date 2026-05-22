import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-textured',
  templateUrl: './textured.component.html',
  styleUrls: ['./textured.component.scss']
})
export class TexturedComponent {
  showInquiryForm = false;

  products: Product[] = [
    { id: 'TX-001', code: 'TPM-TX-001', name: 'Bark Finish', category: 'textured', description: 'Unique bark-textured surface mimicking natural tree bark. Brings organic warmth to any setting.', price: 0, dimensions: [{ height: '24"', diameter: '16"' }] },
    { id: 'TX-002', code: 'TPM-TX-002', name: 'Ripple Wave', category: 'textured', description: 'Flowing ripple wave pattern creating dynamic visual movement. A modern artistic statement.', price: 0, dimensions: [{ height: '28"', diameter: '20"' }] },
    { id: 'TX-003', code: 'TPM-TX-003', name: 'Woven Pattern', category: 'textured', description: 'Hand-pressed woven basket texture giving a rustic handcrafted feel to your plant display.', price: 0, dimensions: [{ height: '22"', diameter: '18"' }] },
    { id: 'TX-004', code: 'TPM-TX-004', name: 'Stone Carved', category: 'textured', description: 'Deep carved stone-like texture with weathered finish. Ancient elegance for modern spaces.', price: 0, dimensions: [{ height: '30"', diameter: '22"' }] },
    { id: 'TX-005', code: 'TPM-TX-005', name: 'Honeycomb Series', category: 'textured', description: 'Geometric honeycomb texture pattern creating a mesmerizing play of light and shadow.', price: 0, dimensions: [{ height: '20"', diameter: '20"' }, { height: '16"', diameter: '16"' }] },
    { id: 'TX-006', code: 'TPM-TX-006', name: 'Spiral Ridge', category: 'textured', description: 'Elegant spiral ridge texture winding upward, creating a sense of upward growth and movement.', price: 0, dimensions: [{ height: '26"', diameter: '14"' }] }
  ];

  constructor(private cartService: CartService) {}

  addToInquiry(product: Product): void { this.cartService.addToCart(product, 1); }
  toggleInquiryForm(): void { this.showInquiryForm = !this.showInquiryForm; }
  onFormSubmitted(): void { this.showInquiryForm = false; }
}
