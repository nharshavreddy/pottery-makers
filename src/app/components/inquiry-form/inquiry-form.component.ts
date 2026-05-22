import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent {
  @Input() formType: 'inquiry' | 'class' = 'inquiry';
  @Input() themeColor = 'terracotta';
  @Output() formSubmitted = new EventEmitter<void>();

  inquiryForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
  whatsappNumber = '917396288015';

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.inquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      preferredDate: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { name, email, phone, preferredDate, message } = this.inquiryForm.value;

    let whatsappMsg = '';
    if (this.formType === 'inquiry') {
      whatsappMsg = this.cartService.generateWhatsAppMessage(name, email, phone);
      if (message) {
        whatsappMsg += encodeURIComponent(`\nMessage: ${message}`);
      }
    } else {
      whatsappMsg = encodeURIComponent(
        `*Pottery Class Registration*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${preferredDate}\n${message ? 'Message: ' + message : ''}`
      );
    }

    window.open(`https://wa.me/${this.whatsappNumber}?text=${whatsappMsg}`, '_blank');

    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;
      this.inquiryForm.reset();
      if (this.formType === 'inquiry') {
        this.cartService.clearCart();
      }
      this.formSubmitted.emit();
    }, 1000);
  }

  closeSuccess(): void {
    this.showSuccess = false;
  }

  get f() { return this.inquiryForm.controls; }
}
