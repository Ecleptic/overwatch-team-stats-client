import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PlayerForm from './components/playerForm'
import Team from './components/team'

import UnsubmittedPage from './components/unsubmittedPage'
import SubmittedPage from './components/submittedPage'

class App extends Component {

  constructor(props) {
    super(props)

    this.apiUrlBase = 'https://overwatch-team-stats-server.herokuapp.com'

    this.state = {
      hasBeenSubmitted: false,
      leftTeamData: [],
      rightTeamData: []
    }

    this.onPlayerFormSubmit = this
      .onPlayerFormSubmit
      .bind(this)
  }

  onPlayerFormSubmit(playerForm) {
    const leftTeamDataPromise = window
      .fetch(this._buildTeamQueryUrl(playerForm.leftTeamPlayerTags))
      .then(httpResponse => httpResponse.json())

    const rightTeamDataPromise = window
      .fetch(this._buildTeamQueryUrl(playerForm.rightTeamPlayerTags))
      .then(httpResponse => httpResponse.json())

    Promise
      .all([leftTeamDataPromise, rightTeamDataPromise])
      .then(([leftTeamData, rightTeamData]) => {
        this.setState({hasBeenSubmitted: true, leftTeamData, rightTeamData})
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UnsubmittedPage}/> 
          <Route path="/submitted" component={SubmittedPage}/> 
        </div>
      </Router>
    )
  }

  /**
   * Builds a URL to query for a team's information.
   * @param {Array} teamPlayerTags The team players' tags.
   */
  _buildTeamQueryUrl(teamPlayerTags) {
    const url = teamPlayerTags
      .filter(playerTag => playerTag != null && playerTag !== '')
      .reduce((url, playerTag, index) => {
        return `${url}${window.encodeURIComponent(playerTag.replace('#', '-'))},`
      }, `${this.apiUrlBase}/players?players=`)

    return url.slice(0, url.length - 1)
  }

  _renderSubmittedState() {
    return (
      <div className='teams-wrapper'>
        <Team players={this.state.leftTeamData} isReversed={false} teamName='Team 1'/>
        <Team players={this.state.rightTeamData} isReversed={true} teamName='Team 2'/>
      </div>
    )
  }

_renderUnsubmittedState() {
  return (<PlayerForm onSubmit={this.onPlayerFormSubmit}/>)
}
}

export default App;

//////this is old code. I'm keeping it just in case I want to implement it or need make sure something else works
/* {this.state.hasBeenSubmitted
//             ? this._renderSubmittedState()
//             : this._renderUnsubmittedState()} 
*/