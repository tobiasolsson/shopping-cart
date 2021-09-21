/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Dam from './components/dam/Dam';
import Herr from './components/herr/Herr';
import Utrustning from './components/utrustning/Utrustning';
import Checkout from './components/checkout/Checkout';

function Routes({ shoppingCart, handleAddToCart }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dam" component={Dam} />
      <Route
        path="/herr"
        render={(props) => (
          <Herr {...props} handleAddToCart={handleAddToCart} />
        )}
      />
      <Route path="/utrustning" component={Utrustning} />
      <Route
        path="/checkout"
        render={(props) => <Checkout {...props} shoppingCart={shoppingCart} />}
      />
    </Switch>
  );
}

export default Routes;
