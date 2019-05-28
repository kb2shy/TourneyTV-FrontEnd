import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';

import Signup from '../components/Signup'

export default class SignupContainer extends Component {

  render(){
    return(
      <Segment inverted color='green'>
        <Image src="/images/vbsignup.png" centered size='medium'/>
        <Signup createPlayer={this.props.createPlayer}/>
      </Segment>
    )
  }
}
