import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

export default class PlayerModal extends Component {

  render(){
    const { firstname, lastname, } = this.props.player;
    return (
      <Modal open={this.props.open} onClose={this.props.close} closeIcon>
        <h1>{firstname}</h1>
      </Modal>
    )
  }
}
