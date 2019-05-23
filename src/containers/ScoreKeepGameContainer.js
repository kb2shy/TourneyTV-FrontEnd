import React, { Component } from 'react';
import { Segment, Grid, Divider, Header } from 'semantic-ui-react';
import ScoreKeepGame from '../components/ScoreKeepGame'

export default class ScoreKeepGameContainer extends Component {

  render() {
    const { minusScore, addScore } = this.props
    const { id, courtnum, team1score, team2score, teams } = this.props.game
    return (
      <Segment placeholder>
        <Grid centered>
          <Grid.Row centered columns={2}>
            <Grid.Column centered>
            <ScoreKeepGame
              team={teams[0]}
              score={team1score}
              minusScore={minusScore}
              addScore={addScore}
            />
            </Grid.Column>
            <Grid.Column>
            <ScoreKeepGame
              team={teams[1]}
              score={team2score}
              minusScore={minusScore}
              addScore={addScore}
            />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider vertical hidden>versus</Divider>
      </Segment>
    )
  }
}
