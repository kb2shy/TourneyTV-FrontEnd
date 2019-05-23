import React, { Component } from 'react';
import { Card, Segment, Modal, Image, Header, Grid} from 'semantic-ui-react';

import TeamCard from '../components/TeamCard';
import TeamModal from '../components/TeamModal';

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
    this.setState({ open: false, team: {}})
  }

  render(){
    const { teams } = this.state
    const { name, city } = this.state.team
    return(
      <Segment>
        <Card.Group centered>
          {teams.map((team, index) =>
            (<TeamCard key={index} team={team}
              setTeamDisplay={this.setTeamDisplay}/>))
          }
        </Card.Group>
        <Modal open={this.state.open} onClose={this.close} closeIcon>
          <Modal.Header>
            Name: {name} <br />
            City: {city}
          </Modal.Header>
          <Modal.Content>
            <TeamModal team={this.state.team} />
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }
}

// ? <TeamModal team={this.state.team} resetTeam={this.resetTeam}/> : null}
