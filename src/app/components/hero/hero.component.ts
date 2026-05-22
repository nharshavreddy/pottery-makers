import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() backgroundClass = 'default';
  @Input() showCta = false;
  @Input() ctaText = 'Explore Collection';
  @Input() ctaLink = '';
  @Input() compact = false;
}
