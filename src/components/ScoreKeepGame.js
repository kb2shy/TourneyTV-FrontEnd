import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

export default class ScoreKeepGame extends Component {

  render() {
    const { score, minusScore, addScore, team} = this.props
    return(
      <Card centered placeholder>
        <Image src={"/images/" + team.image} style={{height: "110px"}}/>
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
