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
    }
  }

  componentDidMount() {
    fetch(TEAMS_URL)
    .then(resp => resp.json())
    .then(teams => this.setState({ teams }))
  }

  setTeamDisplay = (team) => {
    console.log(team);
    debugger;
    this.setState({ team })
  }

  render(){
    console.log(this.state)
    const { teams } = this.state
    return(
      <Segment>
        <Card.Group centered>
          {teams.map((team, index) =>
            (<TeamCard key={index} team={team}
              setTeamDisplay={this.setTeamDisplay}/>))
          }
        </Card.Group>
        {this.state.team.id ? <TeamModal team={this.state.team} /> : null}
      </Segment>
    )
  }
}
