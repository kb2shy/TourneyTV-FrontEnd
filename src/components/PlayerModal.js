import React, { Component } from 'react';
import { Modal, Image, Grid } from 'semantic-ui-react';

export default class PlayerModal extends Component {

  render(){
    const { firstname, lastname, image, jersey, position } = this.props.player;
    return (
      <Modal size="tiny" open={this.props.open} onClose={this.props.close}>
        <Modal.Header>{firstname + " " + lastname}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={4}>
                  <Image src={image}/>
                </Grid.Column>
                <Grid.Column width={8}>
                  Position: {position} <br />
                  Jersey Number: {jersey} <br />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{justifyContent: "flex-end"}}>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
