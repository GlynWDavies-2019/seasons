import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends Component {
    state = {
        latitude: null,
        errorMessage: ''
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message}) 
        );
    }
    render() {
        let jsx = (<div>Loading...</div>);
        if(this.state.latitude) {
            jsx = (
                <SeasonDisplay latitude={this.state.latitude} />
            );
        }
        if(this.state.errorMessage) {
            jsx = (<div>Error: {this.state.errorMessage}</div>);
        }
        return jsx;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));