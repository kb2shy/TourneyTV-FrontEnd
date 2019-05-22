import React, { Component } from 'react';
import { Segment, Grid, Divider, Header } from 'semantic-ui-react';
import ScoreKeepGame from '../components/ScoreKeepGame'

export default class ScoreKeepGameContainer extends Component {

  render() {
    const { updateScore } = this.props
    const { id, courtnum, team1score, team2score, teams } = this.props.game
    return (
      <Segment placeholder>
        <Grid centered>
          <Grid.Row centered columns={2}>
            <Header size="medium">Game #{id} - Court #{courtnum}</Header>
            <Grid.Column centered>
            <ScoreKeepGame team={teams[0]} score={team1score} updateScore={updateScore}/>
            </Grid.Column>
            <Grid.Column>
            <ScoreKeepGame team={teams[1]} score={team2score} updateScore={updateScore}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider vertical hidden>versus</Divider>
      </Segment>
    )
  }
}
