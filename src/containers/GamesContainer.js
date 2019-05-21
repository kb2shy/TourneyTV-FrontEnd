import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';

import CGCard from '../components/CGCard'

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
    const { games } = this.props;
    return(
      <Segment>
        <Card.Group itemsPerRow={3}>
          {games.map((game) => (<CGCard raised game={game}/>))}
        </Card.Group>
      </Segment>
    )
  }

}
