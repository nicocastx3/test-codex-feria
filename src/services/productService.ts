import type { Product } from '../models/Product';

const placeholder = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80';

const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Color Block',
    price: 120,
    category: 'Vestidos',
    description: 'Corte camisero con cinturón desmontable y botones forrados.',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    tags: ['nuevo', 'bestseller'],
    inStock: true
  },
  {
    id: '2',
    name: 'Cárdigan Cosy',
    price: 89,
    category: 'Knitwear',
    description: 'Punto italiano con mezcla de alpaca y silueta relajada.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    tags: ['ecologico'],
    inStock: true
  },
  {
    id: '3',
    name: 'Blusa Hojas',
    price: 74,
    category: 'Tops',
    description: 'Voile de algodón orgánico con estampado botánico exclusivo.',
    imageUrl: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=800&q=80',
    tags: ['hecho-a-mano'],
    inStock: true
  },
  {
    id: '4',
    name: 'Vestido Azul Noche',
    price: 210,
    category: 'Vestidos',
    description: 'Satinado fluido con escote cruzado y falda midi evasé.',
    imageUrl: placeholder,
    tags: ['bestseller'],
    inStock: false
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.tags?.includes('bestseller'));
}

export function getNewArrivals(): Product[] {
  return products.filter((product) => product.tags?.includes('nuevo'));
}

export function getAllProducts(): Product[] {
  return products;
}
