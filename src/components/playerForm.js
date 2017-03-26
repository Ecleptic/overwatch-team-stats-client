import React, { Component } from 'react'

export default class PlayerForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      leftTeamPlayerTags: [
        ''
      ],
      rightTeamPlayerTags: [
        ''
      ]
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onLeftTeamPlayerTagsChange(index, value) {

    const newState = [
      ...this.state.leftTeamPlayerTags.slice(0, index),
      value,
      ...this.state.leftTeamPlayerTags.slice(index + 1)
    ]

    if (index === this.state.leftTeamPlayerTags.length - 1 && value != null && value !== '') {
      newState.push('')
    }

    this.setState({
      leftTeamPlayerTags: newState
    })
  }

  onRightTeamPlayerTagsChange(index, value) {

    const newState = [
      ...this.state.rightTeamPlayerTags.slice(0, index),
      value,
      ...this.state.rightTeamPlayerTags.slice(index + 1)
    ]

    if (index === this.state.rightTeamPlayerTags.length - 1 && value != null && value !== '') {
      newState.push('')
    }

    this.setState({
      rightTeamPlayerTags: newState
    })
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <form className="player-form" onSubmit={this.onSubmit}>
        <div className="TeamColumn LeftSide">
          <h3>Team 1</h3>
          {this.state.leftTeamPlayerTags.map((playerTag, index) => (
            <input 
              className="playerInput" 
              key={index} 
              onChange={event => this.onLeftTeamPlayerTagsChange(index, event.target.value)}
              value={playerTag}
              ></input>
          ))}
        </div>

        <div className="TeamColumn RightSide">
          <h3>Team 2</h3>          
          {this.state.rightTeamPlayerTags.map((playerTag, index) => (
            <input 
              className="playerInput" 
              key={index} 
              onChange={event => this.onRightTeamPlayerTagsChange(index, event.target.value)}
              value={playerTag}
              ></input>
          ))}
        </div>

        <button className="submit">Submit</button>
      </form>
    )
  }
}
