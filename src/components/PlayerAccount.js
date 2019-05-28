import React, { Component } from 'react';
import { Button, Grid, Image, Segment, Header } from 'semantic-ui-react';

export default class PlayerAccount extends Component {

  render(){
    console.log(this.props.current_user)
    const {image, firstname, lastname, position, jersey,
      team, isScoreKeeper, isTeamCaptain} = this.props.current_user.player;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={image} size="large"/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h1" block>{firstname} {lastname}</Header>
            <h3>Team: {team.name}   {isTeamCaptain ? "*Captain*" : null}</h3>
            <h3>Position: {position}</h3>
            <h3>Jersey: {jersey}</h3>
            <h3>Score Keeper status: {isScoreKeeper}</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column >
            <Button.Group floated="right" onClick={(data) => this.props.updateProfile(this.props.current_user)}>
              <Button color="yellow">
                Update
              </Button>
              <Button.Or />
              <Button  color="red">
                Delete
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
