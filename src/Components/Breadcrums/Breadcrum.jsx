import React from "react"; // React kütüphanesini import ediyoruz
import "./Breadcrum.css"; // CSS stil dosyasını import ediyoruz
import arrow_icon from "../Assets/breadcrum_arrow.png"; // Ok ikonunu import ediyoruz

const Breadcrum = (props) => { // Breadcrum fonksiyonel bileşenini tanımlıyoruz
  const { product } = props; // props'dan product objesini alıyoruz
  return (
    <div className="breadcrum"> {/* breadcrum sınıfına sahip div oluşturuyoruz */}
      HOME <img src={arrow_icon} alt="arrow-icon" /> SHOP {/* Ana sayfa ve shop arasında ok ikonları */}
      <img src={arrow_icon} alt="arrow-icon" /> {/* Ok ikonunu gösteriyoruz */}
      {product.category} <img src={arrow_icon} alt="arrow-icon" /> {/* Ürün kategorisini ve ok ikonunu ekliyoruz */}
      {product.name} {/* Ürün adını ekliyoruz */}
    </div>
  );
};

export default Breadcrum; // Breadcrum bileşenini dışa aktarıyoruz
