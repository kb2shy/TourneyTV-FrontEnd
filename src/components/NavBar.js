import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends Component {

  loginAccount = (isLoggedIn, current_user) => {
    if (this.props.isLoggedIn) {
      return <Menu.Item className="float right" name={current_user.player.firstname + "'s Account"}
        onClick={() => this.props.setDisplayState("account")} />
    } else {
      return <Menu.Item className="float right" name='Log in' onClick={() => this.props.setDisplayState("login")} />
    }
  }

  signupLogout = (isLoggedIn) => {
    if (this.props.isLoggedIn) {
      return <Menu.Item name='Log out' onClick={() => this.props.logout()} />
    } else {
      return <Menu.Item name='Sign up' onClick={() => this.props.setDisplayState("signup")} />
    }
  }

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
        {this.loginAccount(this.props.isLoggedIn, this.props.current_user)}
        {this.signupLogout(this.props.isLoggedIn)}
      </Menu>
    )
  }
}
