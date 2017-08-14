import React, { Component } from 'react';
import { Players, Servers } from '../../data';

export class ServerPreview extends Component {
  render(args) {
    console.log(this.props)
    const match = {params: {serverId: 1}};
    const server = Servers.find(s => s.id === match.params.serverId);
    return <h1>{server.map}</h1>;
  }
}

class ServerItem extends Component {
  render() {
    return <h3>{this.props.server.name}</h3>
  }
}

export class ServerList extends Component {
  state = {};

  componentWillMount() {
    this.setState({ servers: this.initServers() });
  }

  initServers() {
    return Servers;
  }

  render() {
    return (
      <ul className="ServerList">
        { this.renderItems() }
      </ul>
    );
  }

  renderItems() {
    return this.state.servers.map(s => <li key={s.id}><ServerItem server={s} /></li>);
  }
}
