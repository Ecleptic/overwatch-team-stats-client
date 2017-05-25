import React, {Component} from 'react';
import PlayerForm from './playerForm'


class UnsubmittedPage extends Component {
    render() {
        return (
        <PlayerForm />
        )
    }
}

export default UnsubmittedPage

// old code again
        // return (<PlayerForm onSubmit={this.onPlayerFormSubmit}/>)
