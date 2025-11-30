export type ProductTag = 'nuevo' | 'hecho-a-mano' | 'ecologico' | 'bestseller';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  tags?: ProductTag[];
  inStock: boolean;
}
