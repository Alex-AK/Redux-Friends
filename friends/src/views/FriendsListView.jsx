import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
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

    return this.props.isLoading ? (
      <div className="loader">
        <Loader type="TailSpin" color="grey" height="50" />
      </div>
    ) : (
      <div className="friend-cards">{friendsList}</div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
