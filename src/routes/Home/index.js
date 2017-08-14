import React, { Component } from 'react';
import logo from '../../static/logo.svg';
import './home.css';

import News from '../../components/News';

class Home extends Component {
  render() {
    return (
      <div className="QLive">
        <News />
      </div>
    );
  }
}

export default Home;
