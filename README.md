# The Pottery Makers - Website

A beautiful Angular 16 website for **The Pottery Makers** — a premium handcrafted pottery business.

## Features

- **Product Catalog**: Browse Terracotta, Concrete, Traditional, Elite, Textured pots, Landscaping solutions, and Raw Clay
- **Smart Inquiry System**: Select products, choose quantities, and send inquiries directly via WhatsApp Business
- **Pottery Class Registration**: Register for hands-on pottery classes with preferred scheduling
- **WhatsApp Integration**: All inquiries and registrations are sent directly to the business WhatsApp
- **Responsive Design**: Beautiful UI/UX on all devices — mobile, tablet, and desktop
- **Category-Based Theming**: Each product category has its own unique color palette

## Color Palette by Category

| Category | Primary Color | Theme |
|----------|--------------|-------|
| Terracotta | `#C75B39` | Warm earthy oranges |
| Concrete | `#6B7B8F` | Industrial cool grays |
| Traditional | `#8B6914` | Golden heritage tones |
| Elite | `#4A6741` | Premium forest greens |
| Textured | `#7B5E3B` | Rich brown textures |
| Landscaping | `#2E7D32` | Natural vibrant greens |
| Raw Clay | `#A0522D` | Deep sienna browns |

## Getting Started

### Prerequisites

- Node.js 18+ (required for Angular 16)
- npm 8+

### Installation

```bash
cd pottery-makers
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── header/       # Navigation header
│   │   ├── footer/       # Site footer
│   │   ├── hero/         # Hero banner component
│   │   ├── product-card/ # Product display card
│   │   └── inquiry-form/ # Inquiry/registration form
│   ├── pages/            # Route pages
│   │   ├── home/         # Landing page
│   │   ├── terracotta/   # Terracotta products
│   │   ├── concrete/     # Concrete products
│   │   ├── traditional/  # Traditional pots
│   │   ├── elite/        # Elite collection
│   │   ├── textured/     # Textured pots
│   │   ├── landscaping/  # Landscaping solutions
│   │   ├── raw-clay/     # Raw clay products
│   │   ├── pottery-classes/ # Class registration
│   │   ├── about/        # About us page
│   │   └── contact/      # Contact page
│   ├── services/         # Business logic services
│   └── models/           # TypeScript interfaces
├── assets/               # Static assets (images, icons)
├── environments/         # Environment configurations
└── styles.scss           # Global styles
```

## Business Contact

- **Phone**: +91 7013 689 742, +91 7396 288 015
- **WhatsApp**: +91 7396 288 015
- **Email**: depotterymakers@gmail.com
- **Website**: www.potterymakers.com
