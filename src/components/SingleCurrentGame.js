import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

export default class SingleCurrentGame extends Component {

  render() {
    const { score, addScore, image, team } = this.props
    return(
      <Card centered>
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
          <Button onClick={addScore}>
            Add Point
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
