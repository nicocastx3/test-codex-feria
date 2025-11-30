import './NavigationBar.css';

function NavigationBar() {
  return (
    <header className="nav">
      <div className="nav__brand">MyLuxe</div>
      <nav className="nav__links">
        <a href="#descubrir">Shop</a>
        <a href="#novedades">New</a>
        <a href="#rebajas">Sale</a>
        <a href="#destacados">Promotions</a>
      </nav>
      <div className="nav__actions">
        <button className="nav__icon" aria-label="Buscar">🔍</button>
        <button className="nav__icon" aria-label="Abrir menú">☰</button>
      </div>
    </header>
  );
}

export default NavigationBar;
