import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Dam from './components/dam/Dam';
import Herr from './components/herr/Herr';
import Utrustning from './components/utrustning/Utrustning';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dam" component={Dam} />
      <Route path="/herr" component={Herr} />
      <Route path="/utrustning" component={Utrustning} />
    </Switch>
  );
}

export default Routes;
