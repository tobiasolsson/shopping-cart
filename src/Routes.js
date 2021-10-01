/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Dam from './components/dam/Dam';
import Herr from './components/herr/Herr';
import Utrustning from './components/utrustning/Utrustning';
import Checkout from './components/checkout/Checkout';

function Routes({ shoppingCart, handleAddToCart, emptyCart }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/dam"
        render={(props) => <Dam {...props} handleAddToCart={handleAddToCart} />}
      />
      <Route
        path="/herr"
        render={(props) => (
          <Herr {...props} handleAddToCart={handleAddToCart} />
        )}
      />
      <Route
        path="/utrustning"
        render={(props) => (
          <Utrustning {...props} handleAddToCart={handleAddToCart} />
        )}
      />
      <Route
        path="/checkout"
        render={(props) => (
          <Checkout
            {...props}
            shoppingCart={shoppingCart}
            emptyCart={emptyCart}
          />
        )}
      />
    </Switch>
  );
}

export default Routes;
