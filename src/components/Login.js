import React, { Component } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

export default class Login extends Component {

  render(){
    return(
      <Container style={{display: "flex", justifyContent: "center"}}>
      <Form inverted>
        <Form.Group>
          <Form.Input label="User name" placeholder="User name" />
          <Form.Input type="password" label="Password" placeholder="Password" />
        </Form.Group>
        <Button type="submit">Log In</Button>
      </Form>
      </Container>
    )
  }
}
