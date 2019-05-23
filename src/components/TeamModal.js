import React, { Component } from 'react';
import { Card, Modal, Grid, Image, Header} from 'semantic-ui-react';

export default class TeamModal extends Component {

  state = {
    open: true,
  }

  close = () => {
    this.setState({open: false})
  }

  render(){
    const { name, city, image, players } = this.props.team
    return(
      <Modal open={this.state.open} onClose={this.close} closeIcon>
        <Modal.Header>
          Name: {name} <br />
          City: {city}
        </Modal.Header>
        <Modal.Content>
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
        </Modal.Content>
      </Modal>
    )
  }
}
