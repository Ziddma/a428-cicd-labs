import React from "react";

function Header() {
  return (
    <header className="navbar-container">
      <div className="logo">
        <img src="src/img/dicoding-header-logo.png" alt="Dicoding Indonesia" />
      </div>
      <nav className="nav-list">
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Apa yang Baru</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
