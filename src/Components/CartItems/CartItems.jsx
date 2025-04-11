import React, { useContext } from "react"; // React ve useContext hook'unu import ediyoruz
import "./CartItems.css"; // CSS stil dosyasını import ediyoruz
import { ShopContext } from "../../Context/ShopContext"; // ShopContext'i import ediyoruz
import remove_icon from "../Assets/cart_cross_icon.png"; // Remove ikonu import ediyoruz

const CartItems = () => { // CartItems fonksiyonel bileşenini tanımlıyoruz
  const {
    deleteAll, // Tüm ürünleri sepetten silmek için fonksiyon
    getTotalCartAmount, // Sepetteki toplam tutarı hesaplamak için fonksiyon
    all_product, // Tüm ürünlerin listesi
    cartItem, // Sepetteki ürünlerin miktarı
    removeFromCart, // Sepetten bir ürün kaldırmak için fonksiyon
  } = useContext(ShopContext); // ShopContext'ten gerekli fonksiyonları ve verileri alıyoruz

  return (
    <div className="cartitems"> {/* CartItems için ana container div */}
      <div className="cartitems-format-main"> {/* Sepetteki ürünlerin başlıkları */}
        <p>Products</p> {/* Ürünler */}
        <p>Title</p> {/* Başlık */}
        <p>Price</p> {/* Fiyat */}
        <p>Quantity</p> {/* Miktar */}
        <p>Total</p> {/* Toplam */}
        <p>Remove</p> {/* Ürünü sil */}
        <p>Remove All</p> {/* Tümünü sil */}
      </div>
      <hr /> {/* Başlıklar ile ürünler arasına çizgi */}
      {all_product.map((e) => { // Ürünleri döngüye alıyoruz
        if (cartItem[e.id] > 0) { // Sepetteki ürün sayısı sıfırdan büyükse, ürün gösteriliyor
          return (
            <div> {/* Ürün bilgilerini gösteren bir div */}
              <div className="cartitems-format cartitems-format-main"> {/* Ürün satırı */}
                <img src={e.image} alt="" className="carticon-product-icon" /> {/* Ürün resmi */}
                <p>{e.name}</p> {/* Ürün adı */}
                <p>${e.new_price}</p> {/* Ürün fiyatı */}
                <button className="cartitems-quantity">{cartItem[e.id]}</button> {/* Ürün miktarı */}
                <p>${e.new_price * cartItem[e.id]}</p> {/* Ürün için toplam fiyat */}
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon} // Silme ikonu
                  onClick={() => {
                    removeFromCart(e.id); // Ürünü sepetten kaldır
                  }}
                  alt=""
                />
                <button
                  className="deletebtn"
                  onClick={() => {
                    deleteAll(); // Sepetteki tüm ürünleri sil
                  }}
                >
                  Delete
                </button>
              </div>
              <hr /> {/* Ürünler arasına çizgi */}
            </div>
          );
        }
        return null; // Sepette bu ürün yoksa hiçbir şey render edilmez
      })}
      <div className="cartitems-down"> {/* Sepetin alt kısmı */}
        <div className="cartitems-total"> {/* Sepet toplamları */}
          <h1>Cart Totals</h1> {/* Sepet Toplamları başlığı */}
          <div>
            <div className="cartitems-total-item"> {/* Alt toplam */}
              <p>Subtotal</p> {/* Ara toplam */}
              <p>${getTotalCartAmount()}</p> {/* Sepetteki ürünlerin toplam tutarı */}
            </div>
            <hr /> {/* Alt toplam ile diğer alan arasına çizgi */}
            <div className="cartitems-total-item"> {/* Kargo ücreti */}
              <p>Shipping Fee</p> {/* Kargo ücreti */}
              <p>Free</p> {/* Kargo ücreti ücretsiz */}
            </div>
            <hr /> {/* Kargo ücreti ile toplam arasında çizgi */}
            <div className="cartitems-total-item"> {/* Genel toplam */}
              <h3>Total</h3> {/* Genel toplam başlığı */}
              <h3>${getTotalCartAmount()}</h3> {/* Sepet toplam tutarı */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button> {/* Ödeme işlemine geçiş butonu */}
        </div>
        <div className="cartitems-promocode"> {/* Promo kodu bölümü */}
          <p>If you have a promo code, Enter it here</p> {/* Promo kodu giriş açıklaması */}
          <div className="cartitems-promobox"> {/* Promo kodu giriş alanı */}
            <input type="text" placeholder="Promo Code" /> {/* Promo kodu input alanı */}
            <button>Submit</button> {/* Gönder butonu */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems; 
