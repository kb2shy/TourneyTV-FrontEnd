import React, { Component } from 'react';
import { Card, Modal, Grid, Image, Header} from 'semantic-ui-react';

export default class TeamModal extends Component {

  render(){
    const { image, players } = this.props.team
    return(
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={"/images/" + image} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as='h2'>Players</Header>
            {console.log(players)}
            {players.map((player, index) => <Card>{player.id})</Card>)}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
