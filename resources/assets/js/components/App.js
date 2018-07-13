import React, { Component } from 'react';

// IMPORT ROUTER
import routes from '../routes';

class App extends Component {
    render() {
        return (
            <div className="App animated fadeIn">
                { routes }
            </div>
        );
    }
}

export default App;
