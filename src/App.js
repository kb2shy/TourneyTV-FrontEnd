import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import SCGContainer from './containers/SCGContainer'

class App extends Component {

  render() {
    return (
      <Container>
        <SCGContainer />
      </Container>
    )
  }
}

export default App;
