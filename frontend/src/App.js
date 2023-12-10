import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/homepage/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Login from "./pages/login";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route
        path="/"
        element={
          <Pages
            productItems={productItems}
            addToCart={addToCart}
            CartItem={CartItem}
            shopItems={shopItems}
          />
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <Cart
            CartItem={CartItem}
            addToCart={addToCart}
            decreaseQty={decreaseQty}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
