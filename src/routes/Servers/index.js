import React, { Component } from 'react';
import { Route } from 'react-router';
import './servers.css';

import { ServerRows } from '../../data';
import { ServerList } from '../../components/ServerList';
import { ServerPreview } from '../../components/ServerPreview';

class Servers extends Component {
  render() {
    return (
      <div className="Servers row">
        <div id="ServerList" className="col-md-6">
          <h1>
            Servers
          </h1>
          <ServerList servers={ServerRows} />
        </div>
        <div id="ServerPreview" className="col-md-6">
          <Route path={`${this.props.match.url}/:serverId`} component={ServerPreview} />
        </div>
      </div>
    );
  }
}

export default Servers;
