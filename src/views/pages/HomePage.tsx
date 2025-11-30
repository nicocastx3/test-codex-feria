import MainLayout from '../layouts/MainLayout';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import PromotionStrip from '../components/PromotionStrip';
import SectionHeading from '../components/SectionHeading';
import { buildCatalogViewModel } from '../../controllers/catalogController';

function HomePage() {
  const catalog = buildCatalogViewModel();

  return (
    <MainLayout>
      <HeroBanner promotion={catalog.heroPromotion} />

      <SectionHeading
        id="destacados"
        title="Best Sellers"
        subtitle="Piezas seleccionadas por nuestra comunidad para lucir todos los días"
      />
      <ProductGrid products={catalog.featured} />

      {catalog.secondaryPromotion && <PromotionStrip promotion={catalog.secondaryPromotion} />}

      <SectionHeading
        id="novedades"
        title="Novedades"
        subtitle="Nuevas siluetas en tonos neutros, confeccionadas con materiales responsables"
      />
      <ProductGrid products={catalog.newArrivals} />

      <SectionHeading
        id="catalogo"
        title="Catálogo completo"
        subtitle="Explora la colección y visita cada ficha de producto para más detalles"
      />
      <ProductGrid products={catalog.catalog} />
    </MainLayout>
  );
}

export default HomePage;
