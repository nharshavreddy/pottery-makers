import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    {
      name: 'Terracotta',
      description: 'Earthy, warm handcrafted pots with rich textures and traditional charm',
      icon: 'local_florist',
      route: '/terracotta',
      color: 'terracotta',
      gradient: 'linear-gradient(135deg, #C75B39, #8B3A25)'
    },
    {
      name: 'Concrete Pots',
      description: 'Modern minimalist designs with industrial elegance and durability',
      icon: 'view_in_ar',
      route: '/concrete',
      color: 'concrete',
      gradient: 'linear-gradient(135deg, #6B7B8F, #3D4A56)'
    },
    {
      name: 'Traditional',
      description: 'Classic designs preserving centuries of pottery heritage and beauty',
      icon: 'temple_hindu',
      route: '/traditional',
      color: 'traditional',
      gradient: 'linear-gradient(135deg, #8B6914, #5C460E)'
    },
    {
      name: 'Elite',
      description: 'Premium sophisticated pots for discerning collectors and spaces',
      icon: 'diamond',
      route: '/elite',
      color: 'elite',
      gradient: 'linear-gradient(135deg, #4A6741, #2E4228)'
    },
    {
      name: 'Textured',
      description: 'Artistic surfaces and patterns that tell stories of craftsmanship',
      icon: 'texture',
      route: '/textured',
      color: 'textured',
      gradient: 'linear-gradient(135deg, #7B5E3B, #4E3B25)'
    },
    {
      name: 'Landscaping',
      description: 'Complete solutions to transform your outdoor spaces into paradises',
      icon: 'park',
      route: '/landscaping',
      color: 'landscaping',
      gradient: 'linear-gradient(135deg, #2E7D32, #1B5E20)'
    },
    {
      name: 'Raw Clay',
      description: 'Ready-to-use raw clay for potters and creative enthusiasts',
      icon: 'palette',
      route: '/raw-clay',
      color: 'clay',
      gradient: 'linear-gradient(135deg, #A0522D, #6B3720)'
    },
    {
      name: 'Pottery Classes',
      description: 'Learn the ancient art of pottery from experienced craftsmen',
      icon: 'school',
      route: '/pottery-classes',
      color: 'classes',
      gradient: 'linear-gradient(135deg, #8B6914, #C75B39)'
    }
  ];

  features = [
    { icon: 'factory', title: 'Largest in Hyderabad', desc: 'One of the largest clay pot manufacturers in the region' },
    { icon: 'palette', title: 'Handcrafted & Custom', desc: 'Customizable designs crafted by skilled artisans' },
    { icon: 'storefront', title: 'Direct Factory Supply', desc: 'Buy directly from the manufacturer — no middlemen' },
    { icon: 'local_shipping', title: 'In-House Transport', desc: 'Safe delivery through our own transport vehicles' }
  ];
}
