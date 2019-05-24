import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

import PlayerModal from './PlayerModal'

export default class PlayerCard extends Component {

  state = { open: false, player: '' }
  open = (player) => this.setState({ open: true, player })
  close = () => this.setState({ open: false, player: '' })

  render(){

    const { id, firstname, lastname, image, position} = this.props.player
    return(
      <Card raised style={{paddingLeft: "5px", marginBottom: "5px",
      width: "200px", height: "75px", marginLeft: "5px"}}
      onClick={(data) => this.open(this.props.player)}
      >
        <Card.Content>
          <Image src={image} avatar/>
          {firstname} {lastname}
          <Card.Meta>Position: {position}</Card.Meta>
        </Card.Content>
        {this.state.open ?
          <PlayerModal key={id} open={this.state.open} close={this.close} player={this.state.player} />
          : null}
      </Card>
    )
  }
}
