import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import About from './About';
import NotFound from './404';

const BuildRoutes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ About } />
    <Route component={ NotFound } />
  </Switch>
);

export default BuildRoutes;
