import React, { Component } from 'react';
import './404.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className="NotFound">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
        <video src="404.mp4" autoPlay loop></video>
      </div>
    );
  }
}
