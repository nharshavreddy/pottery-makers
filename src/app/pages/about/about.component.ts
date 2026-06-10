import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  whyChoose = [
    { icon: 'factory', title: 'Largest in Hyderabad', desc: 'One of the largest clay pot manufacturers in Hyderabad' },
    { icon: 'palette', title: 'Handcrafted & Customizable', desc: 'Handcrafted designs tailored to your space and vision' },
    { icon: 'storefront', title: 'Direct Factory Supply', desc: 'No middlemen — buy directly from the manufacturer' },
    { icon: 'local_shipping', title: 'In-House Transport', desc: 'Safe delivery through our own transport vehicles' },
    { icon: 'auto_awesome', title: 'Tradition Meets Modern', desc: 'A blend of traditional craftsmanship and modern aesthetics' }
  ];

  partnerTypes = [
    'Interior Designers',
    'Architects',
    'Builders & Developers',
    'Retail Stores',
    'Landscaping Companies'
  ];

  partnerBenefits = [
    'Wholesale and bulk pricing for trade partners',
    'Custom and bespoke design capabilities',
    'Direct factory supply with no middlemen',
    'Reliable in-house delivery for large orders',
    'Dedicated support for project-based requirements'
  ];

  credentials = [
    { label: 'Corporate Identification Number (CIN)', value: 'U23931TS2025PTC196830' },
    { label: 'GST Registration Number', value: '36AAPCP6456K1ZO' },
    { label: 'Tax Deduction Account Number (TAN)', value: 'HYDP22224G' },
    { label: 'MSME Registration Number', value: 'UDYAM-TS-02-034383' }
  ];
}
