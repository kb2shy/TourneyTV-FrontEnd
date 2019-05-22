import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

export default class ScoreKeepGame extends Component {

  render() {
    const { score, updateScore, team, image } = this.props
    return(
      <Card centered placeholder>
        <Image src={image}
          size="medium"
          circular
        />
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
