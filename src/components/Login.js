import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

export default class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const player = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.loginPlayer(player);
    this.props.setLoginMessage();
  }

  render(){
    const { username, password } = this.state;
    return(
      <Container style={{display: "flex", justifyContent: "center"}}>
        <Form inverted onSubmit={this.handleSubmit} success>
          <Form.Group>
            <Form.Input
              label="User name"
              placeholder="User name"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button content="Log In" />
        </Form>
      </Container>
    )
  }
}
