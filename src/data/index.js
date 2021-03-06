import serverData from './servers.json';
import playerData from './players.json';
import { getRandomInt } from '../utils';

export const ServerRows = serverData.servers;
export const PlayerRows = playerData.players;

export const LoadPlayers = () => PlayerRows.map(p => new Player(p));
export const RefreshServer = (id) => {
  const s = ServerRows.find(s => s.id === parseInt(id, 10));
  return s ? new ServerMatch(s) : null;
};

export const SiteUser = {
  name: "Jeff Baxendale",
  email: "jbaxendale@alumni.cmu.edu"
};

class Player {
  constructor(playerData) {
    Object.assign(this, playerData);
    this.cumulativeFrags = getRandomInt(0, 1337);
  }
}

class ServerPlayer extends Player {
  constructor(playerData) {
    super(playerData);
    this.currentFrags = 0;
    this.currentPing = getRandomInt(33, 400);
  }

  get ping() {
    return this.currentPing;
  }

  get frags() {
    return this.currentFrags;
  }

  set frags(v) {
    this.currentFrags = parseInt(v, 10);
  }
}

class ServerMatch {
  constructor(serverData) {
    Object.assign(this, serverData);
    this.initializePlayers();
  }

  initializePlayers() {
    const playerChoices = PlayerRows.map(p => new ServerPlayer(p));
    const playerCount = getRandomInt(0, 8);
    const finalPlayers = [];

    while (finalPlayers.length < playerCount) {
      const randomPlayerIdx = getRandomInt(0, playerChoices.length - 1);
      const player = playerChoices[randomPlayerIdx];
      player.frags = playerCount > 1 ? getRandomInt(0, 42) : 0;
      finalPlayers.push(player);
      playerChoices.splice(randomPlayerIdx, 1);
    }

    this._players = finalPlayers.sort((a,b) => {
      if (a.frags < b.frags) return 1;
      else if (a.frags > b.frags) return -1;
      else return 0;
    });
  }

  get players() {
    return this._players || [];
  }

  get playerCount() {
    return this.players.length;
  }

  get maxPlayers() {
    return PlayerRows.length;
  }

  getPlayerRank(player) {
    return this.players.indexOf(player) + 1;
  }
}
