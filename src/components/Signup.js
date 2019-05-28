import React, { Component } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

export default class Signup extends Component {

  render(){
    return(
      <Container style={{display: "flex", justifyContent: "center"}}>
      <Form inverted>
        <Form.Group>
          <Form.Input label="User name" placeholder="User name" />
          <Form.Input type="password" label="Password" placeholder="Password" />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions"/>
        <Button type="submit">Sign up</Button>
      </Form>
      </Container>
    )
  }
}
