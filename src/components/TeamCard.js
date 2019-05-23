import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class TeamCard extends Component {

  render() {
    const { setTeamDisplay } = this.props
    const { name, city, image } = this.props.team
    return(
      <Card onClick={(data) => setTeamDisplay(this.props.team)} raised>
        <Image src={"/images/" + image} style={{height: "110px"}}/>
        <Card.Header as='h1' textAlign='center'>{name}</Card.Header>
        <Card.Meta textAlign='center'>City: {city}</Card.Meta>
      </Card>
    )
  }
}
