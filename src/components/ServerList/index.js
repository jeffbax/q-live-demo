import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

class ServerItem extends Component {
  render() {
    return (
      <LinkContainer to={`/servers/${this.props.server.id}`}>
        <a>{this.props.server.name}</a>
      </LinkContainer>
    )
  }
}

export class ServerList extends Component {

  get servers() {
    return this.props.servers;
  }

  render() {
    return (
      <ul className="ServerList">
        { this.renderItems() }
      </ul>
    );
  }

  renderItems() {
    return this.servers.map(s => <li key={s.id}><ServerItem server={s} /></li>);
  }
}
