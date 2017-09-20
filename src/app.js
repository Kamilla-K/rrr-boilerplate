import React, { Component } from 'react';
import './app.css';

import SomeComponentContainer from './containers/some_component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SomeComponentContainer />
      </div>
    );
  }
}

export default App;
