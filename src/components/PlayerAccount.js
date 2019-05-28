import React, { Component } from 'react';
import { Button, Grid, Image, Segment } from 'semantic-ui-react';

export default class PlayerAccount extends Component {

  render(){
    console.log(this.props.current_user)
    const {firstname, lastname, position, jersey, team} = this.props.current_user.player;
    
    return (
      <h1>{firstname}'s account page</h1>
    )
  }
}
