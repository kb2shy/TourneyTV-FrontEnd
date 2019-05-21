import React, { Component } from 'react';
import { Card, Grid, Divider } from 'semantic-ui-react';

export default class CurrentGameCard extends Component {


  render() {
    console.log(this.props.game)
    const { id, courtnum, team1score, team2score, teams} = this.props.game
    return (
      <Card raised>
        <Card.Content textAlign='center'>
          <Card.Header>
            {"Game #" + id}<Card.Meta>{"Court " + courtnum}</Card.Meta>
          </Card.Header>
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
      </Card>
    )
  }
}
