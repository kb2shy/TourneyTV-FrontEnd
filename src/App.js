import React, { Component } from 'react';
import './App.css';
import { Container, Modal } from 'semantic-ui-react';
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
      displayThis: '',
      games: [],
      game: {
        id: '',
        courtnum: '',
        team1score: '',
        team2score: '',
        teams: {},
      },
      open: false,
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
    debugger;
    if (data !==  this.state.games[data.id - 1] ) {
      console.log(`data does not equal content in this.state.games[${data.id}]`)
      let games = this.state.games;
      games[data.id - 1] = data;
      this.setState(games)
    }
  }

  // update game scores for team1 and team2
  updateScore = (team) => {
    debugger;
    let updateGame = this.state.game;
    if (team.name === this.state.game.teams[0].name) {
      updateGame["team1score"] = this.state.game.team1score + 1;
    } else {
      updateGame["team2score"] = this.state.game.team2score + 1;
    }
    this.setState({ updateGame });
    this.sub.send(updateGame);
  }

  // render single game component through SingleGameContainer
  setSingleGame = (game) => {
    if (game.team1score === null || game.team2score === null) {
      this.setState({ game: {
        id: game.id,
        courtnum: game.courtnum,
        team1score: 0,
        team2score: 0,
        teams: game.teams,
        open: true,
      }})
    } else {
      this.setState({game, open: true})
    }
  }

  setDisplayState = (menuItem) => {
    this.setState({ displayThis: menuItem })
  }

  getDisplay = () => {
    if (this.state.displayThis === "allgames") {
      return <GamesContainer games={this.state.games} setSingleGame={this.setSingleGame}/>
    }
  }

  close = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <Container>
        <MenuContainer setDisplayState={this.setDisplayState}/>
        {this.getDisplay()}
        <Modal open={this.state.open} onClose={this.close}>
          {this.state.game.id ? <ScoreKeepGameContainer game={this.state.game} updateScore={this.updateScore}/> : null}
        </Modal>
      </Container>
    )
  }
}

export default App;
