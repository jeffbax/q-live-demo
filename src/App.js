import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppFrame from './components/AppFrame';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppFrame>
          <Routes/>
        </AppFrame>
      </BrowserRouter>
    );
  }
}

export default App;
