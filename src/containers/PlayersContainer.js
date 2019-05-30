import React, { Component } from 'react';
import { Container, Segment, Header, Card } from 'semantic-ui-react';

import PlayerCard from '../components/PlayerCard';

const PLAYERS_URL = "http://localhost:3000/players";

export default class PlayersContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      players: [],
      player: {},
      open: false,
    }
  }

  componentDidMount(){
    fetch(PLAYERS_URL)
    .then(res => res.json())
    .then( players => this.setState({ players }))
  }

  setPlayer = (player) => {
    this.setState({ player, open: true })
  }

  close = () => {
    this.setState({ player: {}, open: false })
  }

  render(){
    const { players, open } = this.state
    return(
      <Container style={{marginTop: "5px"}}>
        <Header as='h1' textAlign='center'>Registered Players</Header>
        <Segment placeholder>
          <Card.Group itemsPerRow={4} centered>
            {players.map((player, index) =>
              <PlayerCard
                key={index}
                player={player}
                open={open}
                close={this.close}
              />)}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}
