import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

import FriendCard from '../components/FriendList';

export class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const friendsList = this.props.friends.map(friend => (
      <FriendCard key={friend.id} friend={friend} />
    ));

    return <div className="friend-cards">{friendsList}</div>;
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
