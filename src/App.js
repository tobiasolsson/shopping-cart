import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/navbar/Navbar';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item) {
    setShoppingCart((prev) => [...prev, item]);
  }

  function handleRemoveItem(item) {
    const updatedShoppingCart = shoppingCart.filter(
      (oldItem) => oldItem.id !== item.id,
    );
    setShoppingCart(updatedShoppingCart);
  }

  function emptyCart() {
    setShoppingCart([]);
  }

  return (
    <BrowserRouter>
      <Navbar shoppingCart={shoppingCart} handleRemoveItem={handleRemoveItem} />
      <Routes
        shoppingCart={shoppingCart}
        handleAddToCart={handleAddToCart}
        emptyCart={emptyCart}
      />
    </BrowserRouter>
  );
}

export default App;
