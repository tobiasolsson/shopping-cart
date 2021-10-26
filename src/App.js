import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item) {
    if (shoppingCart.length === 0) {
      setShoppingCart([{ ...item, qty: 1 }]);
    }
    if (shoppingCart.length >= 1) {
      const updatedQty = shoppingCart.map((el) =>
        el.title === item.title ? { ...el, qty: el.qty + 1 } : el,
      );
      // om item.title INTE finns i shoppingCart
      // lägg till den i updatedCart med qty: 1
      const addToCart = { ...item, qty: 1 };
      const updatedCart = shoppingCart.some((el) => el.title === item.title)
        ? [...updatedQty]
        : [...updatedQty, addToCart];

      setShoppingCart([...updatedCart]);
    }
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
        ? { ...oldItem, qty: e.target.value }
        : oldItem,
    );
    setShoppingCart(updatedShoppingCart);
  }

  function emptyCart() {
    setShoppingCart([]);
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
