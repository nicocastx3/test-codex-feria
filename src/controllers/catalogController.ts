import type { Product } from '../models/Product';
import type { Promotion } from '../models/Promotion';
import { getAllProducts, getFeaturedProducts, getNewArrivals } from '../services/productService';
import { getPromotions } from '../services/promotionService';

export interface CatalogViewModel {
  heroPromotion: Promotion;
  featured: Product[];
  newArrivals: Product[];
  catalog: Product[];
  secondaryPromotion?: Promotion;
}

export function buildCatalogViewModel(): CatalogViewModel {
  const [heroPromotion, secondaryPromotion] = getPromotions();
  return {
    heroPromotion,
    featured: getFeaturedProducts(),
    newArrivals: getNewArrivals(),
    catalog: getAllProducts(),
    secondaryPromotion
  };
}
