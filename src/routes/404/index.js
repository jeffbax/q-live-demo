import React, { Component } from 'react';
import './404.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <h1>
          404 &mdash; Not Found :(
        </h1>
        <video className="img-responsive" src="/404.mp4" autoPlay loop></video>
      </div>
    );
  }
}
