import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendForm from '../components/FriendForm';
import { addFriend, editFriend } from '../actions';

class FriendFormView extends Component {
  render() {
    console.log('friendformview', this.props.activeEdit);
    return (
      <div>
        <FriendForm
          addFriend={this.props.addFriend}
          history={this.props.history}
          isEditing={this.props.isEditing}
          activeEdit={this.props.activeEdit}
          editFriend={this.props.editFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isEditing: state.isEditing,
    activeEdit: state.activeEdit
  };
};

export default connect(
  mapStateToProps,
  { addFriend, editFriend }
)(FriendFormView);
