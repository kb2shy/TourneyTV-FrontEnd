import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Signup from '../components/Signup'

export default class SignupContainer extends Component {

  render(){
    return(
      <Segment>
        <Signup />
      </Segment>
    )
  }
}
