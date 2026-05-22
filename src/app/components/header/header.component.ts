import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  cartItemCount = 0;

  navLinks = [
    { path: '/terracotta', label: 'Terracotta', icon: 'local_florist' },
    { path: '/concrete', label: 'Concrete Pots', icon: 'view_in_ar' },
    { path: '/traditional', label: 'Traditional', icon: 'temple_hindu' },
    { path: '/elite', label: 'Elite', icon: 'diamond' },
    { path: '/textured', label: 'Textured', icon: 'texture' },
    { path: '/landscaping', label: 'Landscaping', icon: 'park' },
    { path: '/raw-clay', label: 'Raw Clay', icon: 'palette' },
    { path: '/pottery-classes', label: 'Pottery Classes', icon: 'school' },
    { path: '/about', label: 'About Us', icon: 'info' },
    { path: '/contact', label: 'Contact', icon: 'call' }
  ];

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.cart$.subscribe(items => {
      this.cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  navigate(path: string): void {
    this.router.navigate([path]);
    this.closeMobileMenu();
  }
}
