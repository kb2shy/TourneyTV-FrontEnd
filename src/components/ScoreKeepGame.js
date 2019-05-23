import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

import heroes from '../assets/heroes.gif';
import villains from '../assets/villains.gif';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

export default class ScoreKeepGame extends Component {

  renderImage = (name) => {
    switch(name) {
      case 'heroes':
        return <Image src={heroes} style={{height: "110px"}}/>
      case 'villains':
        return <Image src={villains} style={{height: "110px"}} verticalAlign="true"/>
      case 'team3':
        return <Image src={team3} style={{height: "110px"}}/>
      case 'team4':
        return <Image src={team4} style={{height: "110px"}}/>
      default:
        return null;
    }
  }

  render() {
    const { score, minusScore, addScore, team} = this.props
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
        <Card.Content extra style={{display: "flex"}}>
          <Button onClick={(team) => minusScore(this.props.team)} color="red" >
            -
          </Button>
          <h4>POINTS</h4>
          <Button onClick={(team) => addScore(this.props.team)} color="green">
            +
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
