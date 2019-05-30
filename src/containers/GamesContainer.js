import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';

import GameCard from '../components/GameCard'

export default class GamesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      numRows: 1,
      numGames: 1,
    }
  }

  numOfRowsToRender = (props) => {
    this.setState({ numRows: Math.ceil(props.games.length / 3) })
  }

  render(){
    const { games, setSingleGame } = this.props;
    return(
      <Segment placeholder>
        <Card.Group itemsPerRow={3}>
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              setSingleGame={setSingleGame}
              current_user={this.props.current_user}
            />
          ))}
        </Card.Group>
      </Segment>
    )
  }

}
