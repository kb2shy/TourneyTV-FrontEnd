import React, { Component } from 'react';
import { Button, Grid, Image, Form, Dropdown, Checkbox,
  Header} from 'semantic-ui-react';

const PLAYERS_URL = 'http://localhost:3000/players/';

const POSITIONS = [
  {
    key: "Setter",
    text: "Setter",
    value: "Setter"
  },
  {
    key: "Outside",
    text: "Outside",
    value: "Outside"
  },
  {
    key: "Opposite",
    text: "Opposite",
    value: "Opposite"
  },
  {
    key: "Middle",
    text: "Middle",
    value: "Middle"
  },
  {
    key: "Libero",
    text: "Libero",
    value: "Libero"
  },
  {
    key: "Defensive Specialist",
    text: "Defensive Specialist",
    value: "Defensive Specialist"
  }
]

export default class PlayerEditAccount extends Component {

  state = {
    player: this.props.current_user.player,
  }

  handleChange = (e, { name, value }) => {
    let player = this.state.player;
    player[name] = value
    this.setState({ player })
  }

  toggle = () => {
    let player = this.state.player;
    player.isScoreKeeper = !this.state.player.isScoreKeeper;
    this.setState({ player })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const player = this.state.player
    delete player["team"];
    console.log("save button pushed and player will be sent to", player)


    fetch(PLAYERS_URL + player.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.props.current_user.jwt}`
      },
      body: JSON.stringify({player})
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    const {image, firstname, lastname, position, jersey,
      team, isScoreKeeper, isTeamCaptain} = this.state.player;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={image} size="large"/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Form>
              <Header block>
                <Form.Group inline>
                  <Form.Input
                    size="big"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    size="big"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Header>
              <h3>Team: {team.name}   {isTeamCaptain ? "*Captain*" : null}</h3>
              <h3>Position:
                <Dropdown
                  name="position"
                  placeholder="position"
                  inline
                  selection
                  options={POSITIONS}
                  value={position}
                  onChange={this.handleChange}
                  style={{marginLeft: "5px"}}
                />
              </h3>
              <h3>Jersey:
                <Form.Input
                  type="number"
                  placeholder="0"
                  min="0"
                  max="99"
                  inline
                  name="jersey"
                  value={jersey}
                  onChange={this.handleChange}
                />
              </h3>
              <h3>Score Keeper status:
                <Checkbox
                  toggle label="No / Yes"
                  onChange={this.toggle}
                  checked={isScoreKeeper}
                  style={{marginLeft: "5px"}}
                />
              </h3>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column >
            <Button color="blue" floated="right" onClick={this.handleSubmit}>
              Save
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
