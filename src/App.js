import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BuildRoutes from './routes';
import AppFrame from './components/AppFrame';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppFrame>
          { BuildRoutes() }
        </AppFrame>
      </BrowserRouter>
    );
  }
}

export default App;
