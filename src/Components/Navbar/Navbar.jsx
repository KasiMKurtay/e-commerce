import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); //Menüde hangi sekmenin seçili olduğunu gösteren state

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo.png" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            //"Shop" sekmesine tıkladığında menu stat'ini "shop olarak güncelliyoruz"
            setMenu("shop");
          }}
        >
          {/*Anasayfaya yönlendiren link */}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {/*Eğer "Shop" aktifse altına çizgi ekler */}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
          {/*Eğer "mens" aktifse altına çizgi ekler */}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {/*Eğer "womens" aktifse altına çizgi ekler */}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {/*Eğer "kids" aktifse altına çizgi ekler */}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>{" "}
        {/*Sepet içindeki ürün sayısını gösteren alan */}
      </div>
    </div>
  );
};

export default Navbar;
