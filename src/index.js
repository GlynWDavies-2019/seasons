import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            errorMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                latitude: position.coords.latitude
            }),
            (error) => this.setState({
                errorMessage: error.message
            }) 
        );
    } 
    render() {
        let jsx = (<div>Loading...</div>);
        if(this.state.latitude) {
            jsx = (<div>Latitude: {this.state.latitude}</div>);
        }
        if(this.state.errorMessage) {
            jsx = (<div>Error: {this.state.errorMessage}</div>);
        }
        return jsx;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));