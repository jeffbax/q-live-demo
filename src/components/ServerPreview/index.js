import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { RefreshServer } from '../../data';

class MatchPlayerList extends Component {

}

const modNames = {
  'ca': 'Clan Arena',
  'tf': 'Team Fortress',
  'dm': 'Deathmatch'
};

class ServerPlayerTable extends Component {
  render() {
    return (
      <table className="ServerPlayers">
        <thead>
          <tr>
            <th colSpan="2">Player</th>
            <th>Frags</th>
            <th>Ping</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPlayerRows()}
        </tbody>
      </table>
    )
  }

  renderPlayerRows() {
    return this.props.players.map(p => {
      return (
        <tr>
          <td><img src={`/avatars/${p.avatar}`} /></td>
          <td>{p.name}</td>
          <td>{p.frags}</td>
          <td>{p.ping}ms</td>
        </tr>
      )
    });
  }
}

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

  getModName(modCode) {
    return modNames[modCode] || 'n/a';
  }

  refresh(serverId) {
    const parsedId = parseInt(serverId, 10);
    const serverMatch = RefreshServer(parsedId);
    this.setState({server: serverMatch});
  }

  get server() {
    return this.state.server;
  }

  render() {
    if (!this.state.server) {
      return <Redirect to="/404" />
    }
    return (
      <div className="ServerPreview">
        <h2>{this.server.name}</h2>
        <dl>
          <dt>Players</dt>
          <dd>{this.server.playerCount} / 8</dd>
          <dt>Map</dt>
          <dd>{this.server.map}</dd>
          <dt>Mod</dt>
          <dd>{this.getModName(this.server.mod)}</dd>
        </dl>
        <div className="ServerImage">
          <img src={`/maps/${this.server.map}.jpg`} />
        </div>
        <ServerPlayerTable players={this.server.players} />
      </div>
    );
  }
}
