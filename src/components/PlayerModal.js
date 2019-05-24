import React, { Component } from 'react';
import { Modal, Image } from 'semantic-ui-react';

export default class PlayerModal extends Component {

  render(){
    const { firstname, lastname, image, jersey, position } = this.props.player;
    return (
      <Modal size="tiny" open={this.props.open} onClose={this.props.close} closeIcon>
        <Modal.Header>{firstname + " " + lastname}</Modal.Header>
        <Modal.Content>
          <Image wrapped src={image}/>
          <Modal.Description>
            Jersey Number: {jersey} <br />
            Position: {position}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
