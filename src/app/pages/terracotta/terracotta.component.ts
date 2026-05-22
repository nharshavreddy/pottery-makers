import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-terracotta',
  templateUrl: './terracotta.component.html',
  styleUrls: ['./terracotta.component.scss']
})
export class TerracottaComponent implements OnInit {
  products: Product[] = [];
  showInquiryForm = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getTerracottaProducts();
  }

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
