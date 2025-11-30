import type { Promotion } from '../../models/Promotion';
import './PromotionStrip.css';

interface PromotionStripProps {
  promotion: Promotion;
}

function PromotionStrip({ promotion }: PromotionStripProps) {
  return (
    <section className="promotion" id="rebajas">
      <div>
        <p className="promotion__eyebrow">Oferta limitada</p>
        <h2 className="promotion__title">{promotion.title}</h2>
        <p className="promotion__description">{promotion.description}</p>
      </div>
      <a className="button button--primary" href={promotion.href}>
        {promotion.ctaLabel}
      </a>
    </section>
  );
}

export default PromotionStrip;
