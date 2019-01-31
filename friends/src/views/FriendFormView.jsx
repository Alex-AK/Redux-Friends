import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendForm from '../components/FriendForm';
import { addFriend } from '../actions';

class FriendFormView extends Component {
  render() {
    return (
      <div>
        <FriendForm
          addFriend={this.props.addFriend}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(FriendFormView);
