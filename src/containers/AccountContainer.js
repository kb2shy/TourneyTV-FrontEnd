import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import PlayerAccount from '../components/PlayerAccount';

export default class AccountContainer extends Component {

  state = {
    display: 'account',
    
  }

  render(){
    return(
      <Segment>
        <PlayerAccount
          current_user={this.props.current_user}
          updateProfile={this.props.updateProfile}
        />
      </Segment>
    )
  }
}
