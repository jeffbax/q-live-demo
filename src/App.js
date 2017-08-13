import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BuildRoutes from './routes';
import AppFrame from './components/AppFrame';

export default () => (
  <BrowserRouter>
    <AppFrame>
      { BuildRoutes() }
    </AppFrame>
  </BrowserRouter>
);
