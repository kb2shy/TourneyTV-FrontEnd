import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends Component {

  render() {
    return (
      <Menu inverted color='green' secondary>
      <Menu.Item
        name='home'
        // active={activeItem === 'current games'}
        onClick={() => this.props.setDisplayState("home")}
      />
        <Menu.Item
          name='current games'
          // active={activeItem === 'current games'}
          onClick={() => this.props.setDisplayState("allgames")}
        />
        <Menu.Item
          name='teams'
          // active={activeItem === 'teams'}
          onClick={() => this.props.setDisplayState("allteams")}
        />
        <Menu.Item
          name='players'
          // active={activeItem === 'players'}
          onClick={() => this.props.setDisplayState("allplayers")}
        />
        <Menu.Item
          className="float right"
          name='account'
          // active={activeItem === 'account'}
          onClick={() => console.log("account on navbar clicked")}
          disable="true"
        />
        <Menu.Item
          name='sign up'
          // active={activeItem === 'sign up'}
          onClick={() => this.props.setDisplayState("signup")}
        />
      </Menu>
    )
  }
}
