import React, { useState } from 'react';

import { HashRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item) {
    const updatedQty = shoppingCart.map((el) =>
      el.title === item.title ? { ...el, qty: el.qty + 1 } : el,
    );
    const updatedCart = shoppingCart.some((el) => el.title === item.title)
      ? [...updatedQty]
      : [...updatedQty, item];

    setShoppingCart([...updatedCart]);
  }

  function handleRemoveItem(item) {
    const updatedShoppingCart = shoppingCart.filter(
      (oldItem) => oldItem.title !== item.title,
    );
    setShoppingCart(updatedShoppingCart);
  }

  function handleQuantityChange(e, item) {
    const updatedShoppingCart = shoppingCart.map((oldItem) =>
      oldItem.title === item.title
        ? { ...oldItem, qty: +e.target.value }
        : oldItem,
    );
    setShoppingCart(updatedShoppingCart);
  }

  function emptyCart() {
    setShoppingCart([]);
  }

  return (
    <HashRouter>
      <Navbar
        shoppingCart={shoppingCart}
        handleRemoveItem={handleRemoveItem}
        handleQuantityChange={handleQuantityChange}
      />
      <Routes
        shoppingCart={shoppingCart}
        handleAddToCart={handleAddToCart}
        emptyCart={emptyCart}
      />
      <Footer />
    </HashRouter>
  );
}

export default App;
