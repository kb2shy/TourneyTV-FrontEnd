import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

import heros from '../assets/heros.gif';
import villains from '../assets/villains.gif';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

export default class TeamCard extends Component {

  renderImage = (name) => {
    switch(name) {
      case 'heros':
        return <Image src={heros} style={{maxHeight: "110px"}}/>
      case 'villains':
        return <Image src={villains}/>
      case 'team3':
        return <Image src={team3}/>
      case 'team4':
        return <Image src={team4}/>
      default:
        return null;
    }
  }

  render() {
    const { setTeamDisplay } = this.props
    const { name, city, image } = this.props.team
    return(
      <Card onClick={(data) => setTeamDisplay(data)}>
        {this.renderImage(image)}
        <Card.Header as='h1' textAlign='center'>Team Name: {name}</Card.Header>
        <Card.Meta textAlign='center'>City: {city}</Card.Meta>
      </Card>
    )
  }
}
