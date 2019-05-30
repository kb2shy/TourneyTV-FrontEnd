import React, { Component } from 'react';
import { Card, Grid, Divider } from 'semantic-ui-react';

export default class GameCard extends Component {

  clickableCard = (data) => {
    if (this.props.current_user.player && this.props.current_user.player.isScoreKeeper) {
      this.props.setSingleGame(data);
    } else {
      alert("You must be a registered player with score keeping credentials to score points. Please log in.");
    }
  }

  render() {
    const { id, courtnum, team1score, team2score, teams} = this.props.game
    return (
      <Card raised onClick={(data) => this.clickableCard(this.props.game)}>
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
      </Card>
    )
  }
}
