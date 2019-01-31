import React from 'react';

const FriendCard = props => {
  return (
    <div className="friend-card">
      <h1>{props.friend.name}</h1>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <div className="buttons">
        <button className="button">Edit</button>
        <button className="button delete">Delete</button>
      </div>
    </div>
  );
};

export default FriendCard;
