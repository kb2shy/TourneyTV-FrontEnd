import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import NavBar from '../components/NavBar'

export default class MenuContainer extends Component {

  state = {
    logout: false,
  }

  handleLogOut = () => {
    this.setState({ logout: true,});
    this.props.logout();
  }
  render() {

    return (
      <Container>
        <Segment color='green' inverted>
          <NavBar
            setDisplayState={this.props.setDisplayState}
            isLoggedIn={this.props.isLoggedIn}
            logout={this.handleLogOut}
            current_user={this.props.current_user}
          />
        </Segment>
      </Container>
    )
  }
}
