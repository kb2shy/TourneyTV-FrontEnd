import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';

import Login from '../components/Login'

export default class LoginContainer extends Component {

  render(){
    return(
      <Segment inverted color='green'>
        <Image src="/images/vbsignup.png" centered size='medium'/>
        <Login />
      </Segment>
    )
  }
}
