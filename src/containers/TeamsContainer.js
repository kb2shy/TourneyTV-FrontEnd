import React, { Component } from 'react';
import { Card, Segment, Modal, Header } from 'semantic-ui-react';

import TeamCard from '../components/TeamCard';

const TEAMS_URL = 'http://localhost:3000/teams';

export default class TeamsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
      team: {},
      open: false,
    }
  }

  componentDidMount() {
    fetch(TEAMS_URL)
    .then(resp => resp.json())
    .then(teams => this.setState({ teams }))
  }

  setTeamDisplay = (team) => {
    this.setState({ team, open: true })
  }

  close = () => {
    this.setState({ open: false})
  }

  render(){
    const { teams } = this.state
    return(
      <Segment>
        <Card.Group centered>
          {teams.map((team, index) =>
            (<TeamCard key={index} team={team}
              setTeamDisplay={this.setTeamDisplay}/>))
          }
        </Card.Group>
        <Modal open={this.state.open} onClose={this.close} closeIcon>
          <Modal.Header as='h1' style={{margin: "auto", width:"50%"}}>
            {this.state.team.name} (City: {this.state.team.city})
          </Modal.Header>
          
        </Modal>
      </Segment>
    )
  }
}
