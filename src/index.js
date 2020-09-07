import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import './index.css';

// Class-Based Component

// Must extend the Component class

class App extends Component {
    // Equivalent to a constructor
    state = {
        latitude: null,
        errorMessage: ''
    }
    // Lifecycle Method
    // Called once when content is first rendered
    // Load the data here
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message}) 
        );
    }
    // Other lifecycle methods:
       // ComponentDidUpdate
       // ComponentWillUnmount
    // Helper method
    renderContent() {
        let jsx = (<Spinner message="Please accept location request" />);
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
    // The render method must return JSX
    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));