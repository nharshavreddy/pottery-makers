import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-landscaping',
  templateUrl: './landscaping.component.html',
  styleUrls: ['./landscaping.component.scss']
})
export class LandscapingComponent {
  showInquiryForm = false;

  products: Product[] = [
    { id: 'LS-001', code: 'TPM-LS-001', name: 'Garden Pathway Set', category: 'landscaping', description: 'Complete garden pathway solution with matching planters and stone arrangements. Transform any outdoor space.', price: 0, dimensions: [{ height: 'Custom', diameter: 'Custom' }] },
    { id: 'LS-002', code: 'TPM-LS-002', name: 'Zen Garden Package', category: 'landscaping', description: 'Curated zen garden collection including water features, stone arrangements, and meditation planters.', price: 0, dimensions: [{ height: 'Various', diameter: 'Various' }] },
    { id: 'LS-003', code: 'TPM-LS-003', name: 'Entrance Grand Setup', category: 'landscaping', description: 'Impressive entrance setup with large statement pots, paired planters, and decorative elements.', price: 0, dimensions: [{ height: '36"-48"', diameter: '24"-33"' }] },
    { id: 'LS-004', code: 'TPM-LS-004', name: 'Terrace Garden Kit', category: 'landscaping', description: 'Complete terrace transformation kit with tiered planters, railing pots, and hanging solutions.', price: 0, dimensions: [{ height: 'Various', diameter: 'Various' }] },
    { id: 'LS-005', code: 'TPM-LS-005', name: 'Water Feature Setup', category: 'landscaping', description: 'Serene water feature installation with lotus ponds, fountain pots, and aquatic plant containers.', price: 0, dimensions: [{ height: '19"-24"', diameter: '36"-60"' }] },
    { id: 'LS-006', code: 'TPM-LS-006', name: 'Corporate Green Space', category: 'landscaping', description: 'Professional landscaping solution for offices and commercial spaces with modern concrete planters.', price: 0, dimensions: [{ height: 'Custom', diameter: 'Custom' }] }
  ];

  constructor(private cartService: CartService) {}

  addToInquiry(product: Product): void { this.cartService.addToCart(product, 1); }
  toggleInquiryForm(): void { this.showInquiryForm = !this.showInquiryForm; }
  onFormSubmitted(): void { this.showInquiryForm = false; }
}
