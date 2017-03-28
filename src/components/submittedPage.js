import React, {Component} from 'react';
import Team from './team'


class About extends Component {
    render() {
        return (
            <div className='teams-wrapper'>
                <h1>Submitted PAge</h1>
                {/*<Team players={this.state.leftTeamData} isReversed={false} teamName='Team 1'/>
                <Team players={this.state.rightTeamData} isReversed={true} teamName='Team 2'/>*/}
            </div>
        )
    }
}

export default About