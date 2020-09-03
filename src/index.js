import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay';

class App extends Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)  
        );
        return (
            <div>
                Latitude: 
            </div>
        )}
}

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)  
//     );
//     return (
//         <div>
//             Seasons App
//             <SeasonDisplay />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.querySelector('#root'));