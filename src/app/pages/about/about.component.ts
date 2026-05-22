import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    { icon: 'palette', title: 'Craftsmanship', desc: 'Every piece is hand-made with meticulous attention to detail and quality' },
    { icon: 'eco', title: 'Sustainability', desc: 'We use eco-friendly materials and traditional firing techniques' },
    { icon: 'handshake', title: 'Personalized Service', desc: 'We work closely with each customer to find their perfect pieces' },
    { icon: 'history', title: 'Heritage', desc: 'Preserving centuries-old pottery traditions while embracing modern design' }
  ];

  milestones = [
    { year: 'Foundation', desc: 'Started with a passion for traditional pottery' },
    { year: 'Growth', desc: 'Expanded into concrete and designer collections' },
    { year: 'Community', desc: 'Launched pottery classes and workshops' },
    { year: 'Today', desc: '200+ designs across 7 categories' }
  ];
}
