import React, { Component } from 'react';
import { Container, Image, Modal, Header, Message } from 'semantic-ui-react';
import ActionCable from 'actioncable';

import MenuContainer from './containers/MenuContainer';
import ScoreKeepGameContainer from './containers/ScoreKeepGameContainer';
import GamesContainer from './containers/GamesContainer';
import TeamsContainer from './containers/TeamsContainer';
import PlayersContainer from './containers/PlayersContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import AccountContainer from './containers/AccountContainer';

const GAMES_URL = 'http://localhost:3000/games/';
const LOGIN_URL = 'http://localhost:3000/login';
const PLAYERS_URL = 'http://localhost:3000/players';
const WEBSOCKET = 'ws://localhost:3000/cable';

const HOMEPAGE = (
  <Container style={{backgroundColor: "#23b036", marginTop: "14px"}}>
    <Image src="/images/vblogo8.png" size="large" centered />
    <Image src="/images/vblogo6.png" size="large" centered />
    <Image src="/images/vbsignup.png" size="large" centered />
  </Container>
)

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      displayThis: '',
      games: [],
      game: {},
      open: false,
      current_user: {},
      isLoggedIn: false,
      loginMessage: false,
      deleteMessage: false,
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
    if (data !==  this.state.games[data.id - 1] ) {
      let games = this.state.games;
      games[data.id - 1] = data;
      this.setState(games)
    }
  }

  // add game scores for team1 and team2
  addScore = (team) => {
    let updateGame = this.state.game;
    if (team.name === this.state.game.teams[0].name) {
      updateGame["team1score"] = this.state.game.team1score + 1;
    } else {
      updateGame["team2score"] = this.state.game.team2score + 1;
    }
    this.setState({ updateGame });
    this.sub.send(updateGame);
  }

  // subtract game scores for team1 and team2
  minusScore = (team) => {
    let updateGame = this.state.game;
    if (team.name === this.state.game.teams[0].name) {
      updateGame["team1score"] = this.state.game.team1score - 1;
    } else {
      updateGame["team2score"] = this.state.game.team2score - 1;
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
    this.setState({ displayThis: menuItem, game: {} })
  }

  getDisplay = () => {
    switch (this.state.displayThis) {
      case "allgames":
        return <GamesContainer
                  games={this.state.games}
                  setSingleGame={this.setSingleGame}
                  current_user={this.state.current_user}
                />;
      case "allteams":
        return <TeamsContainer />;
      case "allplayers":
        return <PlayersContainer />;
      case "login":
        return <LoginContainer loginPlayer={this.loginPlayer} setLoginMessage={this.setLoginMessage}/>;
      case "signup":
        return <SignupContainer createPlayer={this.createPlayer}/>;
      case "account":
        return <AccountContainer current_user={this.state.current_user} deletePlayer={this.deletePlayer}/>;
      default:
        return HOMEPAGE;
    }
  }

  close = () => {
    this.setState({open: false})
  }

  loginPlayer = (loginCred) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({player: loginCred})
    })
    .then(res => res.json())
    .then(data => this.setState({ current_user: data, isLoggedIn: true}))
  }

  createPlayer = (playerCred) => {
    fetch(PLAYERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({player: playerCred})
    })
    .then(res => res.json())
    .then(data => this.setState({ current_user: data, isLoggedIn: true}))
  }

  deletePlayer = (player) => {
    fetch(PLAYERS_URL + `/${player.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.state.current_user.jwt}`
      },
      body: JSON.stringify({player})
    })
    .then(res => res.json())
    this.setState({ current_user: {}, isLoggedIn: false, displayThis: '', deleteMessage: true})
  }

  logout = () => {
    this.setState({ current_user: {}, isLoggedIn: false, displayThis: ""})
  }

  setLoginMessage = () => {
    this.setState({loginMessage: true})
  }

  dismissMessage = () => {
    this.setState({loginMessage: false, deleteMessage: false})
  }

  updateProfile = (player) => {
    fetch(PLAYERS_URL, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ player })
    })
    .then(res => res.json())
  }

  render() {
    return (
      <Container>
        <MenuContainer
          setDisplayState={this.setDisplayState}
          isLoggedIn={this.state.isLoggedIn}
          logout={this.logout}
          current_user={this.state.current_user}
        />
        {this.state.loginMessage ?
          <Message
            success header='Log in successful'
            content="Welcome to TourneyTV"
            onDismiss={this.dismissMessage}
          /> : null}
        {this.state.deleteMessage ?
          <Message
            negative header='Account Deleted'
            content="Your account no longer exists."
            onDismiss={this.dismissMessage}
          /> : null}
        {this.getDisplay()}
        <Modal open={this.state.open} onClose={this.close} centered>
          <Header as='h1' textAlign='center'>
            Game #{this.state.game.id} - Court #{this.state.game.courtnum}
          </Header>
          <Modal.Content>
            <ScoreKeepGameContainer
              game={this.state.game}
              addScore={this.addScore}
              minusScore={this.minusScore}
            />
          </Modal.Content>
        </Modal>

      </Container>
    )
  }
}
