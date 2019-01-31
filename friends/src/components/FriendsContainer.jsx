import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

export class FriendsContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return this.props.friends.map(friend => (
      <h1 key={friend.id}>{friend.name}</h1>
    ));
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsContainer);
