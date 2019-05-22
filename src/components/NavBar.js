import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends Component {

  render() {
    return (
      <Menu inverted color='green' secondary>
        <Menu.Item
          name='current games'
          // active={activeItem === 'current games'}
          onClick={() => this.props.setDisplayState("allgames")}
        />
        <Menu.Item
          name='teams'
          // active={activeItem === 'teams'}
          onClick={() => this.props.setDisplayState("teams")}
        />
        <Menu.Item
          name='players'
          // active={activeItem === 'players'}
          onClick={() => this.props.setDisplayState("players")}
        />
        <Menu.Item
          className="float right"
          name='account'
          // active={activeItem === 'account'}
          onClick={this.handleItemClick}
          disable
        />
        <Menu.Item
          name='sign up'
          // active={activeItem === 'sign up'}
          onClick={this.handleItemClick}
          disable
        />
      </Menu>
    )
  }
}
