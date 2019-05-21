import React, { Component } from 'react';
import { Card, Grid, Divider, Button } from 'semantic-ui-react';

export default class GameCard extends Component {


  render() {
    const { id, courtnum, team1score, team2score, teams} = this.props.game
    return (
      <Card raised>
        <Card.Content textAlign='center'>
          <Card.Header>
            {"Game #" + id}
          </Card.Header>
          <Card.Meta>{"Court " + courtnum}</Card.Meta>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                {teams[0].name}
                <Card.Meta>{teams[0].city}</Card.Meta>
                {team1score}
              </Grid.Column>
              <Grid.Column>
                {teams[1].name}
                <Card.Meta>{teams[1].city}</Card.Meta>
                {team2score}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider vertical hidden>vs</Divider>
        </Card.Content>
        <Card.Content extra>
          <Button fluid onClick={(game) => this.props.setSingleGame(this.props.game)}>
            Keep Score
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
