import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private concreteProducts: Product[] = [
    {
      id: 'TPMC-0001', code: 'TPMC-0001', name: 'Truncated Cone',
      category: 'concrete',
      description: 'A minimalist concrete pot with a smooth matte finish and tapered shape. Durable and modern, perfect for enhancing any indoor or outdoor space.',
      price: 4000,
      setPrice: 'Buy Set of 3 at ₹9,999',
      dimensions: [
        { height: '25"', diameter: '22"' },
        { height: '22"', diameter: '19"' },
        { height: '18"', diameter: '14"' }
      ]
    },
    {
      id: 'TPMC-0004', code: 'TPMC-0004', name: 'Conical Frustum',
      category: 'concrete',
      description: 'A tall, tapered concrete pot with a sleek conical shape. Modern and elegant, ideal for statement plants.',
      price: 1700,
      setPrice: 'Buy Set of 3 at ₹3,999',
      dimensions: [
        { height: '30"', diameter: '17"' },
        { height: '25"', diameter: '17"' },
        { height: '20"', diameter: '17"' }
      ]
    },
    {
      id: 'TPMC-0007', code: 'TPMC-0007', name: 'Urn-Shaped Curved Tapered',
      category: 'concrete',
      description: 'A stylish urn-shaped concrete pot with a soft curved taper. Elegant and sturdy, perfect for adding a classic modern touch.',
      price: 5500,
      setPrice: 'Buy 2 at ₹9,999',
      dimensions: [{ height: '36"', diameter: '19"' }]
    },
    {
      id: 'TPMC-0008', code: 'TPMC-0008', name: 'The Titan Cylinder',
      category: 'concrete',
      description: 'Combines a bold architectural silhouette with raw enduring strength of premium concrete. Clean vertical lines and minimalist industrial finish.',
      price: 5500,
      setPrice: 'Buy Set of 3 at ₹9,999',
      dimensions: [
        { height: '30"', diameter: '18"' },
        { height: '24"', diameter: '12"' },
        { height: '14"', diameter: '12"' }
      ]
    },
    {
      id: 'TPMC-0011', code: 'TPMC-0011', name: 'U-Bullet Shaped',
      category: 'concrete',
      description: 'Minimalist organic silhouette, a versatile choice for contemporary indoor greenery or modern outdoor landscape accents.',
      price: 16500,
      setPrice: 'Buy 2 at ₹30,000',
      dimensions: [{ height: '42"', diameter: '24"' }]
    },
    {
      id: 'TPMC-0012', code: 'TPMC-0012', name: 'The Hourglass Drum Planter',
      category: 'concrete',
      description: 'Striking hourglass silhouette with textured weathered finish bringing earthy primitive charm. Bold sculptural statement piece.',
      price: 14500,
      setPrice: 'Buy 2 at ₹25,000',
      dimensions: [
        { height: '28"', diameter: '32"' },
        { height: '24"', diameter: '28"' }
      ]
    },
    {
      id: 'TPMC-0014', code: 'TPMC-0014', name: 'The Elliptical Egg Planter',
      category: 'concrete',
      description: 'Graceful ovoid silhouette with smooth stone-like texture evoking natural serenity and balance. Ideal for lush foliage.',
      price: 6000,
      setPrice: 'Buy 2 at ₹10,000',
      dimensions: [
        { height: '35"', diameter: '18"' },
        { height: '30"', diameter: '16"' }
      ]
    },
    {
      id: 'TPMC-0016', code: 'TPMC-0016', name: 'The Zen U-Shape Trio',
      category: 'concrete',
      description: 'Refined U-shape silhouette with smooth industrial gray finish radiating modern simplicity. Seamless curved base design.',
      price: 3800,
      setPrice: 'Buy Set of 3 at ₹8,500',
      dimensions: [
        { height: '28"', diameter: '18"' },
        { height: '25"', diameter: '18"' },
        { height: '22"', diameter: '18"' }
      ]
    },
    {
      id: 'TPMC-0019', code: 'TPMC-0019', name: 'The Heritage Urn',
      category: 'concrete',
      description: 'Robust broad-shouldered silhouette with hand-finished texture. Timeless architectural presence for grand entryways or gardens.',
      price: 22500,
      setPrice: 'Buy Set of 2 at ₹32,000',
      dimensions: [
        { height: '48"', diameter: '33"' },
        { height: '32"', diameter: '25"' }
      ]
    },
    {
      id: 'TPMC-0024', code: 'TPMC-0024', name: 'The Ashtakon Zen Pond',
      category: 'concrete',
      description: 'Premium octagonal concrete vessel designed to create a serene aquatic ecosystem for lotus, lilies, and ornamental fish.',
      price: 15000,
      setPrice: 'Buy with full setup @ ₹22,000',
      dimensions: [{ height: 'N/A', diameter: '60" (5 Feet)' }]
    },
    {
      id: 'TPMC-0025', code: 'TPMC-0025', name: 'Bowl Zen Pond Collection',
      category: 'concrete',
      description: 'Transform your outdoor space into a serene aquatic oasis with exquisitely curated self-contained water features.',
      price: 5500,
      dimensions: [
        { height: '19"', diameter: '48"' },
        { height: '19"', diameter: '36"' },
        { height: '11"', diameter: '30"' }
      ]
    },
    {
      id: 'TPMC-0033', code: 'TPMC-0033', name: 'Ethereal Earth Collection',
      category: 'concrete',
      description: 'Spherical planters with sophisticated blend of smooth off-white and weathered charcoal finishes. Organic hand-finished textures.',
      price: 2500,
      dimensions: [
        { height: '18"', diameter: '19"' },
        { height: '24"', diameter: '20"' },
        { height: '34"', diameter: '30"' }
      ]
    },
    {
      id: 'TPMC-0039', code: 'TPMC-0039', name: 'The Pietra Planter Series',
      category: 'concrete',
      description: 'Versatile collection of cast concrete pots with clean lines and modern raw finish. Fits seamlessly into urban and natural environments.',
      price: 7000,
      setPrice: 'Buy Set of 4 at ₹18,000',
      dimensions: [
        { height: '30"', length: '16"' },
        { height: '30"', length: '13"' },
        { height: '25"', length: '11"' }
      ]
    },
    {
      id: 'TPMC-0043', code: 'TPMC-0043', name: 'Zenith Concrete Cube',
      category: 'concrete',
      description: 'Minimalist square planter with seamless smooth concrete finish and clean geometric silhouette. Perfect modern accent.',
      price: 4000,
      dimensions: [
        { height: '24"', length: '24"' },
        { height: '24"', length: '18.5"' },
        { height: '22"', length: '17.5"' }
      ]
    },
    {
      id: 'TPMC-0047', code: 'TPMC-0047', name: 'Zenith Grand Trough',
      category: 'concrete',
      description: 'Premium rectangular planter with seamless matte concrete finish. Elongated silhouette perfect for lush multi-plant arrangements.',
      price: 12000,
      dimensions: [
        { height: '18"', width: '18"', length: '48"' },
        { height: '24"', width: '24"', length: '48"' },
        { height: '15"', width: '18"', length: '60"' }
      ]
    }
  ];

  private terracottaProducts: Product[] = [
    {
      id: 'TR-RD-82069', code: '#TR-RD-82069/70/71', name: 'Designer Terracotta Tall',
      category: 'terracotta',
      description: 'Elegant tall terracotta designer pot with rich earthy textures and warm colors. Handcrafted with traditional techniques.',
      price: 0,
      dimensions: [
        { height: '35"', diameter: '9.5"' },
        { height: '30"', diameter: '8.5"' },
        { height: '24"', diameter: '9"' }
      ]
    },
    {
      id: 'TR-RD-82072', code: '#TR-RD-82072/73', name: 'Designer Wide Body',
      category: 'terracotta',
      description: 'Beautiful wide-body terracotta pot with artistic textures. Perfect for home decor and garden styling.',
      price: 0,
      dimensions: [
        { height: '30"', diameter: '14"' },
        { height: '28"', diameter: '15"' }
      ]
    },
    {
      id: 'TR-RD-82074', code: '#TR-RD-82074/75', name: 'Textured Globe',
      category: 'terracotta',
      description: 'Artistically textured globe-shaped terracotta pot. Play with textures and colours for unique home decor.',
      price: 0,
      dimensions: [
        { height: '30"', diameter: '16"' },
        { height: '24"', diameter: '14"' }
      ]
    },
    {
      id: 'TR-RD-82078', code: '#TR-RD-82078/79/80', name: 'Classic Trio Set',
      category: 'terracotta',
      description: 'Classic trio terracotta set available in multiple sizes. Timeless design that complements any space.',
      price: 0,
      dimensions: [
        { height: '35"', diameter: '15"' },
        { height: '30"', diameter: '15"' },
        { height: '24"', diameter: '14"' }
      ]
    },
    {
      id: 'TR-RD-82020', code: '#TR-RD-82020/21/22', name: 'Tall Cylindrical',
      category: 'terracotta',
      description: 'Tall cylindrical terracotta planter, handcrafted with love. Statement piece for indoor and outdoor spaces.',
      price: 0,
      dimensions: [
        { height: '48"', diameter: '12"' },
        { height: '36"', diameter: '12"' },
        { height: '30"', diameter: '10"' }
      ]
    },
    {
      id: 'TR-RD-82030', code: '#TR-RD-82030/31/32', name: 'Tapered Classic',
      category: 'terracotta',
      description: 'Classic tapered terracotta design available in graduated sizes. Perfect for creating layered garden displays.',
      price: 0,
      dimensions: [
        { height: '30"', diameter: '16"' },
        { height: '25"', diameter: '15"' },
        { height: '20"', diameter: '14"' }
      ]
    },
    {
      id: 'TR-RD-82040', code: '#TR-RD-82040/41/42', name: 'Artisan Trio',
      category: 'terracotta',
      description: 'Artisan-crafted terracotta trio with beautiful proportions. Each piece tells a story of traditional craftsmanship.',
      price: 0,
      dimensions: [
        { height: '36"', diameter: '15"' },
        { height: '25"', diameter: '15"' },
        { height: '15"', diameter: '12"' }
      ]
    },
    {
      id: 'TR-RD-82095', code: '#TR-RD-82095', name: 'Mini Decorative Vase',
      category: 'terracotta',
      description: 'Charming mini decorative terracotta vase. Perfect for small plants, succulents, or as standalone decor.',
      price: 0,
      dimensions: [{ height: '17"', diameter: '7"' }]
    },
    {
      id: 'TR-RD-82106', code: '#TR-RD-82106/107/108', name: 'Heritage Collection',
      category: 'terracotta',
      description: 'Heritage collection featuring traditional terracotta designs with modern appeal. Available in three sizes.',
      price: 0,
      dimensions: [
        { height: '36"', diameter: '15"' },
        { height: '25"', diameter: '15"' },
        { height: '15"', diameter: '11"' }
      ]
    }
  ];

  getConcreteProducts(): Product[] {
    return this.concreteProducts;
  }

  getTerracottaProducts(): Product[] {
    return this.terracottaProducts;
  }

  getProductsByCategory(category: string): Product[] {
    switch (category) {
      case 'concrete': return this.concreteProducts;
      case 'terracotta': return this.terracottaProducts;
      default: return [];
    }
  }
}
