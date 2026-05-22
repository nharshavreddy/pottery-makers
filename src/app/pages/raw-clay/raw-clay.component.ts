import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-raw-clay',
  templateUrl: './raw-clay.component.html',
  styleUrls: ['./raw-clay.component.scss']
})
export class RawClayComponent {
  showInquiryForm = false;

  products: Product[] = [
    { id: 'RC-001', code: 'TPM-RC-001', name: 'Red Earthen Clay - 5kg', category: 'raw-clay', description: 'Premium quality red earthen clay, ready to use. Perfect for wheel throwing and hand building.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] },
    { id: 'RC-002', code: 'TPM-RC-002', name: 'Red Earthen Clay - 10kg', category: 'raw-clay', description: 'Bulk pack of ready-to-use red clay. Ideal for pottery classes and studio use.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] },
    { id: 'RC-003', code: 'TPM-RC-003', name: 'White Kaolin Clay - 5kg', category: 'raw-clay', description: 'Fine white kaolin clay for delicate pottery work. Smooth texture, great for sculpting.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] },
    { id: 'RC-004', code: 'TPM-RC-004', name: 'Terracotta Mix - 10kg', category: 'raw-clay', description: 'Special terracotta blend ready for immediate use. Pre-mixed with ideal moisture content.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] },
    { id: 'RC-005', code: 'TPM-RC-005', name: 'Studio Pack - 25kg', category: 'raw-clay', description: 'Professional studio pack with consistent quality. Perfect for workshops and pottery schools.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] },
    { id: 'RC-006', code: 'TPM-RC-006', name: 'Beginners Kit', category: 'raw-clay', description: 'Starter kit with 3kg clay, basic tools, and instruction guide. Perfect for first-time potters.', price: 0, dimensions: [{ height: 'N/A', diameter: 'N/A' }] }
  ];

  constructor(private cartService: CartService) {}

  addToInquiry(product: Product): void { this.cartService.addToCart(product, 1); }
  toggleInquiryForm(): void { this.showInquiryForm = !this.showInquiryForm; }
  onFormSubmitted(): void { this.showInquiryForm = false; }
}
