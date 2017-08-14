import React, { Component } from 'react';
import './home.css';

import News from '../../components/News';

class Home extends Component {
  render() {
    return (
      <div className="QLive">
        <h2>
          The Latest Quake News
          <img src="/Reddit-PNG-HD.png" alt="Thanks Reddit!" />
        </h2>
        <News />
      </div>
    );
  }
}

export default Home;
