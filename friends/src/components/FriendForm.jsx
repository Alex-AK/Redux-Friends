import React, { Component } from 'react';

class FriendsForm extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.props.history.push('/');
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.isEditing
      ? this.props.editFriend(this.state.friend, this.props.friend.id)
      : this.props.addFriend(this.state.friend);
    this.props.history.push('/');
  };

  render() {
    return (
      <form className="friend-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.friend.name}
          onChange={this.handleChange}
          required
          minLength="2"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={this.state.friend.age}
          onChange={this.handleChange}
          required
          minLength="1"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.friend.email}
          onChange={this.handleChange}
          required
          minLength="5"
        />
        <button className="form-button button">
          {this.props.isEditing ? 'Update' : 'Add'}
        </button>
      </form>
    );
  }
}

export default FriendsForm;
