import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import ActionCable from 'actioncable';

import MenuContainer from './containers/MenuContainer'
import ScoreKeepGameContainer from './containers/ScoreKeepGameContainer'
import GamesContainer from './containers/GamesContainer'

const GAMES_URL = 'http://localhost:3000/games/';
const WEBSOCKET = 'ws://localhost:3000/cable';

class App extends Component {

  constructor() {
    super()
    this.state = {
      games: [],
      game: '',
    }
  }

  componentDidMount() {
    fetch(GAMES_URL)
    .then(res => res.json())
    .then(data => {
      this.setState( { games: data})
    })

    const cable = ActionCable.createConsumer(WEBSOCKET)

    this.sub = cable.subscriptions.create('GamesChannel', {
      received: this.handleReceiveData
    })
  }

  handleReceiveData = (data) => {
    if (data !==  this.state ) {
      this.setState({ games: data })
    }
  }

  updateGames = (game) => {
    let games = { games: []}
    this.setState({ })
    let data = {id: 1, team1score: this.state.team1score + 1, team2score: this.state.team2score};
    this.sub.send(data);
  }

  // addScoreTeam2 = () => {
  //   this.setState({ team2score: this.state.team2score + 1})
  //   let data = {id: 1, team1score: this.state.team1score, team2score: this.state.team2score + 1};
  //   this.sub.send(data);
  // }

  // pass this prop through SingleGameContainer
  setSingleGame = (game) => {
    this.setState( { game })
  }

  render() {
    return (
      <Container>
        <MenuContainer />
        <GamesContainer games={this.state.games} setSingleGame={this.setSingleGame}/>
        {this.state.game ? <ScoreKeepGameContainer game={this.state.game}/> : null}
      </Container>
    )
  }
}

export default App;
