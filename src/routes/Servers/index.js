import React, { Component } from 'react';
import { Route } from 'react-router';
import './servers.css';

import { ServerList, ServerPreview } from '../../components/ServerList';

const Servers = ({ match }) => (
  <div className="Servers">
    <div id="ServerList">
      <h1>
        Servers
      </h1>
      <ServerList />
    </div>
    <div id="ServerPreview">
      <Route path={`${match.url}/:serverId`} component={ServerPreview} />
    </div>
  </div>
);

export default Servers;
