import type { Promotion } from '../../models/Promotion';
import './HeroBanner.css';

interface HeroBannerProps {
  promotion: Promotion;
}

function HeroBanner({ promotion }: HeroBannerProps) {
  return (
    <section className="hero" id="descubrir">
      <div className="hero__content">
        <p className="hero__eyebrow">Discover lingerie fresh from your styling session</p>
        <h1 className="hero__title">{promotion.title}</h1>
        <p className="hero__description">{promotion.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={promotion.href}>
            {promotion.ctaLabel}
          </a>
          <a className="button button--ghost" href="#destacados">
            Explore Bestseller picks
          </a>
        </div>
      </div>
      <div className="hero__image">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80"
          alt="Modelo sonriendo con fondo cálido"
        />
      </div>
    </section>
  );
}

export default HeroBanner;
