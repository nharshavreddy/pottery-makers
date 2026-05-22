import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-elite',
  templateUrl: './elite.component.html',
  styleUrls: ['./elite.component.scss']
})
export class EliteComponent {
  showInquiryForm = false;

  products: Product[] = [
    { id: 'EL-001', code: 'TPM-EL-001', name: 'Emerald Elegance', category: 'elite', description: 'Premium hand-finished pot with emerald green glazed finish. A sophisticated piece for luxury interiors.', price: 0, dimensions: [{ height: '28"', diameter: '20"' }] },
    { id: 'EL-002', code: 'TPM-EL-002', name: 'Golden Curve', category: 'elite', description: 'Artisan-crafted pot with gold-leaf accents and graceful curves. Ideal for high-end spaces.', price: 0, dimensions: [{ height: '32"', diameter: '18"' }] },
    { id: 'EL-003', code: 'TPM-EL-003', name: 'Midnight Luxe', category: 'elite', description: 'Deep black matte finish with subtle metallic veining. Statement piece for modern luxury decor.', price: 0, dimensions: [{ height: '24"', diameter: '22"' }] },
    { id: 'EL-004', code: 'TPM-EL-004', name: 'Pearl White Series', category: 'elite', description: 'Pristine pearl white finish with smooth texture. Timeless elegance for any premium setting.', price: 0, dimensions: [{ height: '30"', diameter: '16"' }, { height: '24"', diameter: '14"' }] },
    { id: 'EL-005', code: 'TPM-EL-005', name: 'Copper Crown', category: 'elite', description: 'Oxidized copper-finish planter with artistic patina effect. Each piece is uniquely aged.', price: 0, dimensions: [{ height: '26"', diameter: '20"' }] },
    { id: 'EL-006', code: 'TPM-EL-006', name: 'Royal Mosaic', category: 'elite', description: 'Handcrafted mosaic tile planter featuring intricate geometric patterns inspired by royal palaces.', price: 0, dimensions: [{ height: '22"', diameter: '24"' }] }
  ];

  constructor(private cartService: CartService) {}

  addToInquiry(product: Product): void {
    this.cartService.addToCart(product, 1);
  }

  toggleInquiryForm(): void { this.showInquiryForm = !this.showInquiryForm; }
  onFormSubmitted(): void { this.showInquiryForm = false; }
}
