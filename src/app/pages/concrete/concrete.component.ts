import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-concrete',
  templateUrl: './concrete.component.html',
  styleUrls: ['./concrete.component.scss']
})
export class ConcreteComponent implements OnInit {
  products: Product[] = [];
  showInquiryForm = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getConcreteProducts();
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
