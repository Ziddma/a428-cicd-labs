import React from "react";
import circleG from "../img/circle-g.jpg"; // Mengimpor gambar dari folder src/img

function MainContent() {
  return (
    <main>
      <div className="content">
        <div className="content-description">
          <h1 className="title">Dicoding Indonesia</h1>
          <p>
            Kami yakin pendidikan teknologi adalah fondasi bagi setiap bangsa agar menjadi yang
            terdepan dalam menghadapi dunia digital. Dicoding hadir sebagai platform pendidikan
            teknologi yang membantu menghasilkan talenta digital berstandar global. Semua demi
            mengakselerasi Indonesia agar menjadi yang terdepan.
          </p>
          <button>Lebih lanjut</button>
        </div>
        <div className="content-image">
          {/* Menggunakan gambar yang diimpor */}
          <img src={circleG} alt="Dicoding Indonesia" />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
