import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { RefreshServer } from '../../data';

export class ServerPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      server: null
    };
  }

  componentWillMount() {
    this.refresh(this.props.match.params.serverId);
  }

  componentWillReceiveProps(nextProps) {
    this.refresh(nextProps.match.params.serverId);
  }

  refresh(serverId) {
    const parsedId = parseInt(serverId, 10);
    const serverMatch = RefreshServer(parsedId);
    this.setState({server: serverMatch});
  }

  render() {
    if (!this.state.server) {
      return <Redirect to="/404" />
    }
    return <h1>{this.state.server.map}</h1>;
  }
}

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
