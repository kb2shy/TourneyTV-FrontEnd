import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

import heros from '../assets/heros.gif';
import villains from '../assets/villains.gif';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

export default class ScoreKeepGame extends Component {

  renderImage = (name) => {
    switch(name) {
      case 'heros':
        return <Image src={heros} style={{maxHeight: "110px"}}/>
      case 'villains':
        return <Image src={villains} verticalAlign="true"/>
      case 'team3':
        return <Image src={team3} size="medium"/>
      case 'team4':
        return <Image src={team4} size="medium"/>
      default:
        return null;
    }
  }

  render() {
    const { score, updateScore, team} = this.props
    return(
      <Card centered placeholder>
        {this.renderImage(team.image)}
        <Card.Content textAlign='center'>
          <Card.Header >Team: {team.name}</Card.Header>
          <Card.Description>
            City: {team.city}
          </Card.Description>
          <Card.Description>
            <h2>Score: {score}</h2>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={(team) => updateScore(this.props.team)}>
            Add Point
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
