import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendsListView from './views/FriendsListView';
import NavigationView from './views/NavigationView';
import FriendsFormView from './views/FriendFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavigationView} />
        <Route
          exact
          path="/"
          render={props => <FriendsListView {...props} />}
        />
        <Route
          path="/add-friend"
          render={props => <FriendsFormView {...props} />}
        />
      </div>
    );
  }
}

export default App;
