import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  companyName = environment.companyName;
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
  whatsappNumber = '917396288015';

  locationMapUrl = 'https://share.google/7scHC4ceSY9RgS8Tb';

  contactInfo: { icon: string; label: string; values?: string[]; link?: string; isLocation?: boolean; city?: string }[] = [
    {
      icon: 'location_on',
      label: 'Location',
      isLocation: true,
      city: 'Hyderabad, Telangana',
      link: this.locationMapUrl
    },
    { icon: 'call', label: 'Phone', values: ['+91 7013 689 742', '+91 7396 288 015'] },
    { icon: 'chat', label: 'WhatsApp Business', values: ['+91 7396 288 015'] },
    { icon: 'mail', label: 'Email', values: ['depotterymakers@gmail.com'] },
    { icon: 'language', label: 'Website', values: ['www.potterymakers.com'] }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: [''],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { name, email, phone, subject, message } = this.contactForm.value;

    const whatsappMsg = encodeURIComponent(
      `*New Contact Message*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject || 'General Inquiry'}\n\nMessage: ${message}`
    );

    window.open(`https://wa.me/${this.whatsappNumber}?text=${whatsappMsg}`, '_blank');

    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;
      this.contactForm.reset();
    }, 1000);
  }

  closeSuccess(): void {
    this.showSuccess = false;
  }

  openWhatsApp(): void {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }

  get f() { return this.contactForm.controls; }
}
