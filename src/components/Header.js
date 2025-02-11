import React from "react";
import logo from "../img/dicoding-header-logo.png"; // Mengimpor gambar dari folder src/img

function Header() {
  return (
    <header className="navbar-container">
      <div className="logo">
        {/* Menggunakan gambar yang diimpor */}
        <img src={logo} alt="Dicoding Indonesia" />
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
