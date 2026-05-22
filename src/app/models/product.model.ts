export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  setPrice?: string;
  dimensions: Dimension[];
  image?: string;
}

export interface Dimension {
  height: string;
  diameter?: string;
  width?: string;
  length?: string;
}

export type ProductCategory =
  | 'terracotta'
  | 'concrete'
  | 'traditional'
  | 'elite'
  | 'textured'
  | 'landscaping'
  | 'raw-clay';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  items: CartItem[];
  message?: string;
}

export interface ClassRegistration {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message?: string;
}
