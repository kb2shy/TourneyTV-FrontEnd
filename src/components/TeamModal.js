import React, { Component } from 'react';
import { Card, Modal, Grid, Image, Header} from 'semantic-ui-react';

import PlayerCard from '../components/PlayerCard'

export default class TeamModal extends Component {

  render(){
    const { name, city, image, players } = this.props.team
    return(
      <Modal open={this.props.open} onClose={this.props.close} closeIcon>
        <Modal.Header>
          Name: {name} <br />
          City: {city}
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6} verticalAlign="middle">
                <Image src={"/images/" + image} fluid/>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header as='h2'>Players</Header>
                <Card.Group itemsPerRow={3}>
                  {players.map((player, index) =>
                    (<Modal.Actions>
                        <PlayerCard key={index} player={player}/>
                    </Modal.Actions>))
                  }
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    )
  }
}
