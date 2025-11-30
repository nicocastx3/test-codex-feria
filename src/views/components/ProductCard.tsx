import type { Product } from '../../models/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.imageUrl} alt={product.name} loading="lazy" />
        {product.tags?.includes('nuevo') && <span className="badge">Nuevo</span>}
      </div>
      <div className="product-card__info">
        <div>
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__description">{product.description}</p>
        </div>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
          <button className="button button--ghost" disabled={!product.inStock}>
            {product.inStock ? 'Ver detalles' : 'Agotado'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
