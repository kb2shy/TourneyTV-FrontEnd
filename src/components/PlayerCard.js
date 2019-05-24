import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

export default class PlayerCard extends Component {
  //
  // state = { open: false }
  // open = () => this.setState({ open: true })
  // close = () => this.setState({ open: false })
    // const { open } = this.state

  render(){

    const { firstname, lastname, image, position} = this.props.player
    return(
      <Card raised style={{paddingLeft: "5px", marginBottom: "5px",
      width: "200px", height: "75px", marginLeft: "5px"}}>
        <Card.Content>
          <Image src={image} avatar/>
          {firstname} {lastname}
          <Card.Meta>Position: {position}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}
