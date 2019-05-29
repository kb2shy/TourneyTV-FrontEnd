import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

export default class Signup extends Component {

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
    console.log()
    this.props.createPlayer(player)
  }

  render(){
    const { username, password } = this.state;
    return(
      <Container style={{display: "flex", justifyContent: "center"}}>
        <Form inverted onSubmit={this.handleSubmit}>
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
          <Form.Checkbox label="I agree to the Terms and Conditions"/>
          <Form.Button content="Sign up" />
        </Form>
      </Container>
    )
  }
}
