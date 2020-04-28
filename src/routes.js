import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes({ theme }) {
  return (
    <Switch>
      <Route path="/" exact component={Home} theme={theme} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
