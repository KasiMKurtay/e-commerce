import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            //Döngüde her öğe için Item bileşeni oluşturur
            <Item
              key={i} //Her item için benzersiz bir "key" verir
              id={item.id} //Item'in id değerini props olarak gönderir
              name={item.name} //Item'in adını props olarak gönderir
              image={item.image} //İtem'ın resmini props olarak gönderir
              new_price={item.new_price} //Item'in yeni fiyatını props olarak gödnerir
              old_price={item.old_price} //Item'in eski fiyatını props olarak gönderir
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
