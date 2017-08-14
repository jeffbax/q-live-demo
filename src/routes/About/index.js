import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>
          About
        </h1>
        <p>Well, this is my first React app, in honor of my favorite game ever. It's pretty basic. In fact, you'll quickly notice its lacking:</p>
        <ol>
          <li>Any real authentication</li>
          <li>Style of any value -- like really</li>
          <li>A persistence layer perhaps</li>
          <li>&hellip; and much much more</li>
        </ol>
        <p>It was originally built for my interview at <a href="https://mediasilo.com/">MediaSilo</a> after spending most of the phone screen talking about the greatest game of all time &mdash; Quake 1 of course</p>
        <p>News (if it makes it) is a giant hack because I ran into CORS issues at the last minute and don't have time to setup the proxy server it needs at the moment</p>
        <p>Check out the code at <a href="https://github.com/jeffbax/q-live-demo">https://github.com/jeffbax/q-live-demo</a>. Hopefully nobody sues due to "Quake Live" being clearly trademarked and an <a href="http://www.quakelive.com/">actual product by Bethesda</a> which they ruined by killing off support for Mac &amp; Linux players despite the open source engine :(</p>
      </div>
    );
  }
}
