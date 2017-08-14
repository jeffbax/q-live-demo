import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { RefreshServer } from '../../data';
import './server-preview.css';

const modNames = {
  'ca': 'Clan Arena',
  'tf': 'Team Fortress',
  'dm': 'Deathmatch'
};

const mapNames = {
  'dm3': 'The Abandoned Base',
  'e1m7': 'The House of Chthon',
  'e2m6': 'The Necropolis',
  '2fort5': '2Forts',
  'well6': 'The Well'
}

const validSorts = new Set(['frags', 'ping', 'name']);

class ServerPlayerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {sort: 'frags', ascending: false};
  }

  sortByName() {
    this.setSort('name');
  }

  sortByFrags() {
    this.setSort('frags');
  }

  sortByPing() {
    this.setSort('ping');
  }

  setSort(sort='frags') {
    if (!validSorts.has(sort)) {
      throw Error('Attempting invalid sort');
    }
    let ascending = this.state.ascending;
    if (this.state.sort === sort) {
      ascending = !ascending;
    }
    this.setState({sort, ascending});
  }

  render() {
    return !this.props.server.players.length ? <p className="NoPlayers">No Active Players :(</p> : (
      <table className="ServerPlayers">
        <thead>
          <tr>
            <th>Rank</th>
            <th className="sortable" colSpan="2" onClick={this.sortByName.bind(this)}>Player</th>
            <th className="sortable" onClick={this.sortByFrags.bind(this)}>Frags</th>
            <th className="sortable" onClick={this.sortByPing.bind(this)}>Ping</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPlayerRows()}
        </tbody>
      </table>
    )
  }

  renderPlayerRows() {
    return this.sortedPlayers.map(p => {
      return (
        <tr key={p.id}>
          <td>{this.getRank(p)}</td>
          <td className="playerImage">
            <img src={`/avatars/${p.avatar}`} alt={p.avatar}
              className="img-fluid img-rounded" />
            </td>
          <td className="playerName">{p.name}</td>
          <td>{p.frags}</td>
          <td>{p.ping}ms</td>
        </tr>
      )
    });
  }

  getRank(p) {
    return this.props.server.getPlayerRank(p);
  }

  get sortedPlayers() {
    const sorted = [...this.props.server.players];
    const sortBy = this.state.sort;
    const ascending = this.state.ascending;

    sorted.sort((a, b) => {
      const aProp = a[sortBy];
      const bProp = b[sortBy];

      if (aProp > bProp) {
        return ascending ? 1 : -1;
      } else if (aProp < bProp) {
        return ascending ? -1 : 1;
      }
      return 0;
    });
    return sorted;
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
    this.buttonRefresh();
  }

  componentWillReceiveProps(nextProps) {
    this.refresh(nextProps.match.params.serverId);
  }

  getModName(modCode) {
    return modNames[modCode] || 'n/a';
  }

  getMapName(map) {
    return mapNames[map] || 'n/a';
  }

  refresh(serverId) {
    const parsedId = parseInt(serverId, 10);
    const serverMatch = RefreshServer(parsedId);
    this.setState({server: serverMatch});
  }

  buttonRefresh() {
    this.refresh(this.props.match.params.serverId);
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
        <h2 className="col-12">{this.server.name}</h2>
        <div className="ServerStats col-sm-6">
          <dl className="ServerStatus">
            <dt>Players</dt>
            <dd>{this.server.playerCount} / {this.server.maxPlayers}</dd>
            <dt>Map</dt>
            <dd>{this.getMapName(this.server.map)}</dd>
            <dt>Mod</dt>
            <dd>{this.getModName(this.server.mod)}</dd>
          </dl>
          <button onClick={this.buttonRefresh.bind(this)}>Refresh Stats</button>
        </div>
        <div className="ServerImage col-sm-6">
          <img src={`/maps/${this.server.map}.jpg`} alt={this.server.map} className="img-rounded img-responsive" />
        </div>
        <div className="col-sm-12">
          <h3>Players</h3>
          <ServerPlayerTable server={this.server} />
        </div>
      </div>
    );
  }
}
