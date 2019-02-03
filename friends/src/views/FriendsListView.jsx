import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends, deleteFriend, openEdit } from '../actions';

import FriendCard from '../components/FriendCard';

export class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    this.props.deleteFriend(id);
  };

  openEdit = id => {
    const selected = this.props.friends.find(friend => friend.id === id);
    this.props.history.push('/add-friend');
    this.props.openEdit(selected);
  };

  render() {
    const friendsList = this.props.friends.map(friend => (
      <FriendCard
        key={friend.id}
        friend={friend}
        deleteFriend={this.deleteFriend}
        openEdit={this.openEdit}
        isEditing={this.isEditing}
        activeEdit={this.activeEdit}
      />
    ));

    return <div className="friend-cards">{friendsList}</div>;
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend, openEdit }
)(FriendsListView);
