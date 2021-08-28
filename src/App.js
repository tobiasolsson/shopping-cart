import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
