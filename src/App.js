import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import MenuContainer from './containers/MenuContainer'
import SCGContainer from './containers/SCGContainer'
import GamesContainer from './containers/GamesContainer'

const VB_URL = "http://localhost:3000/games"

class App extends Component {

  constructor() {
    super()
    this.state = {
      games: [],
    }
  }

  componentDidMount() {
    fetch(VB_URL)
    .then(res => res.json())
    .then(data => {
      this.setState( { games: data})
    })
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <MenuContainer />
        <GamesContainer games={this.state.games}/>
      </Container>
    )
  }
}

export default App;
