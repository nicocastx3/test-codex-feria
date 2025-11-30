import type { Promotion } from '../models/Promotion';

const promotions: Promotion[] = [
  {
    id: 'hero',
    title: 'Embrace Your Inner Shine',
    description: 'Descubre la colección de lencería pensada para moverte sin esfuerzo.',
    ctaLabel: 'Shop now',
    href: '#descubrir'
  },
  {
    id: 'seasonal',
    title: 'Novedades cada semana',
    description: 'Cápsulas limitadas con materiales responsables y acabados hechos a mano.',
    ctaLabel: 'Ver novedades',
    href: '#novedades'
  }
];

export function getPromotions(): Promotion[] {
  return promotions;
}
