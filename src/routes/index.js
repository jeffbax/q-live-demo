import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import About from './About';
import Players from './Players';
import Rankings from './Rankings';
import Servers from './Servers';
import NotFound from './404';

const BuildRoutes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ About } />
    <Route path="/players/:playerId" component={ Players } />
    <Route path="/rankings" component={ Rankings } />
    <Route path="/servers" component={ Servers } />
    <Route component={ NotFound } />
  </Switch>
);

export default BuildRoutes;
