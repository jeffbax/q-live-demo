import React, { Component } from 'react';
import { Route } from 'react-router';
import './servers.css';

import { ServerRows } from '../../data';
import { ServerList, ServerPreview } from '../../components/ServerList';

class Servers extends Component {
  render() {
    return (
      <div className="Servers">
        <div id="ServerList">
          <h1>
            Servers
          </h1>
          <ServerList servers={ServerRows} />
        </div>
        <div id="ServerPreview">
          <Route path={`${this.props.match.url}/:serverId`} component={ServerPreview} />
        </div>
      </div>
    );
  }
}

export default Servers;
