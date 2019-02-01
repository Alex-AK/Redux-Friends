import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends, deleteFriend } from '../actions';

import FriendCard from '../components/FriendCard';

export class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    this.props.deleteFriend(id);
  };

  openEdit = id => {
    this.props.history.push('/add-friend');
  };

  editFriend = id => {};

  render() {
    const friendsList = this.props.friends.map(friend => (
      <FriendCard
        key={friend.id}
        friend={friend}
        deleteFriend={this.deleteFriend}
        openEdit={this.openEdit}
      />
    ));

    return <div className="friend-cards">{friendsList}</div>;
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(FriendsListView);
