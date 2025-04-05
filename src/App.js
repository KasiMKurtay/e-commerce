import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*Uygulamanın yönlendirmeleri için BrowserRouter bileşeni kullanılır */}
        <Navbar /> {/*Navbar bileşeni ekleniyor */}
        <Routes>
          {/*Yönelndirme rotalarını tanımlar */}
          <Route path="/" element={<Shop />} />
          {/*Ana sayfa, Shop bileşenini render eder (Yani ana sayfa Shop olarak gösterilir) */}
          <Route path="/mens" element={<ShopCategory category="men" />} />
          {/* /mens yolu, ShopCategory bileşenini render ve "men" kategorasini render eder */}
          <Route path="/womens" element={<ShopCategory category="women" />} />
          {/* /womens yolu, ShopCategory bileşenini ve "women" kategoreisini render eder */}
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          {/* /kids yolu, ShopCategory bileşenini render eder */}
          <Route path="product" element={<Product />}>
            {/*Dinamk productId yolu, belirli bir ürün sayfasını render eder */}
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          {/*Cart yolu, cart bileşenini render eder */}
          <Route path="/login" element={<LoginSignup />} />
          {/* Login yolu, LoginSignup bileşenini render eder */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
