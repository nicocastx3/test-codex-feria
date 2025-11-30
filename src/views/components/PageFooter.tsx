import './PageFooter.css';

function PageFooter() {
  return (
    <footer className="footer">
      <div className="footer__brand">MyLuxe</div>
      <p className="footer__text">Diseñado con un enfoque responsable y atención al detalle.</p>
      <div className="footer__links">
        <a href="#descubrir">Catálogo</a>
        <a href="#destacados">Destacados</a>
        <a href="#novedades">Novedades</a>
      </div>
    </footer>
  );
}

export default PageFooter;
