import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { RefreshServer } from '../../data';

const modNames = {
  'ca': 'Clan Arena',
  'tf': 'Team Fortress',
  'dm': 'Deathmatch'
};

const validSorts = new Set(['frags', 'ping', 'name']);

class ServerPlayerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {sort: 'frags', ascending: true};
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
    return (
      <table className="ServerPlayers">
        <thead>
          <tr>
            <th colSpan="2" onClick={this.sortByName.bind(this)}>Player</th>
            <th onClick={this.sortByFrags.bind(this)}>Frags</th>
            <th onClick={this.sortByPing.bind(this)}>Ping</th>
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
          <td><img src={`/avatars/${p.avatar}`} /></td>
          <td>{p.name}</td>
          <td>{p.frags}</td>
          <td>{p.ping}ms</td>
        </tr>
      )
    });
  }

  get sortedPlayers() {
    const sorted = [...this.props.players];
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
