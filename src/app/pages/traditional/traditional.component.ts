import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.scss']
})
export class TraditionalComponent {
  showInquiryForm = false;

  products: Product[] = [
    { id: 'TR-001', code: 'TPM-TR-001', name: 'Classic Matka', category: 'traditional', description: 'Traditional Indian matka pot with timeless appeal. Handcrafted using age-old techniques passed down through generations.', price: 0, dimensions: [{ height: '24"', diameter: '18"' }] },
    { id: 'TR-002', code: 'TPM-TR-002', name: 'Temple Pot', category: 'traditional', description: 'Inspired by ancient temple architecture, this pot features intricate patterns and classic proportions.', price: 0, dimensions: [{ height: '30"', diameter: '16"' }] },
    { id: 'TR-003', code: 'TPM-TR-003', name: 'Handi Style', category: 'traditional', description: 'Wide-bodied traditional handi style pot perfect for larger plants and garden centerpieces.', price: 0, dimensions: [{ height: '20"', diameter: '24"' }] },
    { id: 'TR-004', code: 'TPM-TR-004', name: 'Heritage Urn', category: 'traditional', description: 'A majestic heritage urn combining classical form with robust construction for garden and entryway use.', price: 0, dimensions: [{ height: '36"', diameter: '20"' }] },
    { id: 'TR-005', code: 'TPM-TR-005', name: 'Diya Collection', category: 'traditional', description: 'Set of decorative traditional diya-inspired planters, perfect for festive decor and small plants.', price: 0, dimensions: [{ height: '8"', diameter: '10"' }, { height: '6"', diameter: '8"' }] },
    { id: 'TR-006', code: 'TPM-TR-006', name: 'Rajasthani Blue', category: 'traditional', description: 'Hand-painted Rajasthani blue pottery style planter, bringing vibrant cultural heritage to your space.', price: 0, dimensions: [{ height: '18"', diameter: '14"' }] }
  ];

  constructor(private cartService: CartService) {}

  addToInquiry(product: Product): void {
    this.cartService.addToCart(product, 1);
  }

  toggleInquiryForm(): void {
    this.showInquiryForm = !this.showInquiryForm;
  }

  onFormSubmitted(): void {
    this.showInquiryForm = false;
  }
}
