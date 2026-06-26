function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#/" aria-label="BRZ Solutions">
        <span className="brand-mark">B</span>
        <span>BRZ Solutions</span>
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#/brookz">Brookz</a>
        <a href="#/brzone">BrzOne</a>
        <a href="#/brzclinic">BrzClinic</a>
        <a href="#/dialer">BrzDialer</a>
      </nav>
    </header>
  );
}

export default Header;
