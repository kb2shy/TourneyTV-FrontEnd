import React, { Component } from 'react';
import { Segment, Confirm } from 'semantic-ui-react';

import PlayerAccount from '../components/PlayerAccount';
import PlayerEditAccount from '../components/PlayerEditAccount';

export default class AccountContainer extends Component {

  state = {
    display: '',
    player: this.props.current_user.player,
    open: false,
  }

  updateProfile = (player) => {
    this.setState({ player })
  }

  setDisplay = (data) => {
    switch(data) {
      case "edit":
        return this.setState({ display: 'edit'});
      default:
        return this.setState({ display: ''})
    }
  }

  displayType = () => {
    if (this.state.display === 'edit') {
      return <PlayerEditAccount
        current_user={this.props.current_user}
        setDisplay={this.setDisplay}
        updateProfile={this.updateProfile}
        />
    } else {
      return <PlayerAccount
        current_user={this.props.current_user.player}
        setDisplay={this.setDisplay}
        open={this.open}
      />;
    }
  }

  open = () => this.setState({ open: true})
  deletePlayer = (player) => this.props.deletePlayer(this.props.current_user.player)
  cancel = () => this.setState({ open: false })

  render(){
    return(
      <Segment>
        {this.displayType()}
        <Confirm open={this.state.open} onCancel={this.cancel} onConfirm={this.deletePlayer}/>
      </Segment>
    )
  }
}
