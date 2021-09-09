import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/navbar/Navbar';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item) {
    setShoppingCart((prev) => [...prev, item]);
  }

  return (
    <BrowserRouter>
      <Navbar shoppingCart={shoppingCart} />
      <Routes handleAddToCart={handleAddToCart} />
    </BrowserRouter>
  );
}

export default App;
