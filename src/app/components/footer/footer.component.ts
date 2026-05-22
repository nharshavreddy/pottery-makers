import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  whatsappNumber = '917396288015';

  openWhatsApp(): void {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
