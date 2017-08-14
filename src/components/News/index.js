import React, { Component } from 'react';

class News extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async fetchLatest() {
    const results = await fetch('http://www.google.com/');
    console.log(results);
  }

  render() {
    return (
      <div>
        <h2>Quake News:</h2>
        <a onClick={this.fetchLatest.bind(this)}>Reload</a>
      </div>
    );
  }
}

export default News;
