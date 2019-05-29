import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import PlayerAccount from '../components/PlayerAccount';
import PlayerEditAccount from '../components/PlayerEditAccount';

export default class AccountContainer extends Component {

  state = {
    display: '',
  }

  setDisplay = () => {
    this.setState({ display: 'edit'})
  }

  displayType = () => {
    if (this.state.display === 'edit') {
      return <PlayerEditAccount current_user={this.props.current_user}/>
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
