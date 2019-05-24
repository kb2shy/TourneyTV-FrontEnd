import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';

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
    this.setState({team: {}, open: false,})
  }

  render(){
    const { teams } = this.state
    const { id } = this.state.team
    return(
      <Segment>
        <Card.Group centered>
          {teams.map((team, index) =>
            (<TeamCard key={index} team={team}
              setTeamDisplay={this.setTeamDisplay}/>))
          }
        </Card.Group>

        {this.state.open ?
          <TeamModal key={id} open={this.state.open} close={this.close} team={this.state.team} />
          : null}

      </Segment>
    )
  }
}

// ? <TeamModal team={this.state.team} resetTeam={this.resetTeam}/> : null}
