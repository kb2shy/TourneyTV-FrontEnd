import React, { Component } from 'react';
import { Card, Segment, Modal, Image, Header, Grid} from 'semantic-ui-react';

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
    const { name, city, image, players } = this.state.team
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
            Name: {this.state.team.name} <br />
            City: {this.state.team.city}
          </Modal.Header>
          <Modal.Content>
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={"/images/" + image} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as='h2'>Players</Header>
                  {console.log(players)}


                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }
}
// {players.map((player, index) => <Card>{player.id})</Card>)}
