import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import PlayerAccount from '../components/PlayerAccount';
import PlayerEditAccount from '../components/PlayerEditAccount';

export default class AccountContainer extends Component {

  state = {
    display: '',
    player: this.props.current_user.player,
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
      />;
    }
  }

  render(){
    return(
      <Segment>
        {this.displayType()}
      </Segment>
    )
  }
}
