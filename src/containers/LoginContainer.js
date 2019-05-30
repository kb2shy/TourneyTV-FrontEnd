import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';

import Login from '../components/Login'

export default class LoginContainer extends Component {

  render(){
    return(
      <Segment inverted color='green'>
        <Image src="/images/vbball.png" centered size='medium'/>
        <Login loginPlayer={this.props.loginPlayer} setLoginMessage={this.props.setLoginMessage}/>
      </Segment>
    )
  }
}
