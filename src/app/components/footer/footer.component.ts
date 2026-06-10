import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  companyName = environment.companyName;
  currentYear = new Date().getFullYear();
  whatsappNumber = '917396288015';

  openWhatsApp(): void {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
