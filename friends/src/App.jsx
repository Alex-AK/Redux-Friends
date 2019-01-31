import React, { Component } from 'react';

import FriendsContainer from './components/FriendsContainer';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
