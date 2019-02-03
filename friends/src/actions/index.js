import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_COMPLETED = 'GET_FRIENDS_COMPLETED';
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const DELETE_FRIENDS_COMPLETED = 'DELETE_FRIENDS_COMPLETED';
export const DELETE_FRIENDS_FAILED = 'DELETE_FRIENDS_FAILED';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_FRIENDS_COMPLETED = 'ADD_FRIENDS_COMPLETED';
export const ADD_FRIENDS_FAILED = 'ADD_FRIENDS_FAILED';
export const EDIT_FRIEND = 'EDIT_FRIENDS';
export const EDIT_FRIEND_COMPLETED = 'EDIT_FRIENDS_COMPLETED';
export const EDIT_FRIEND_FAILED = 'EDIT_FRIENDS_FAILED';
export const OPEN_EDIT = 'OPEN_EDIT';

export const getFriends = () => dispatch => {
  dispatch({
    type: GET_FRIENDS
  });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res =>
      dispatch({
        type: GET_FRIENDS_COMPLETED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FRIENDS_FAILED,
        error: 'request failed'
      })
    );
};

export const deleteFriend = id => dispatch => {
  dispatch({
    type: DELETE_FRIENDS
  });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_FRIENDS_COMPLETED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_FRIENDS_FAILED,
        error: 'request failed'
      })
    );
};

export const addFriend = friend => dispatch => {
  console.log(friend);
  dispatch({
    type: ADD_FRIENDS
  });
  axios
    .post(`http://localhost:5000/api/friends/`, friend)
    .then(res =>
      dispatch({
        type: ADD_FRIENDS_COMPLETED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_FRIENDS_FAILED,
        error: 'request failed'
      })
    );
};

export const openEdit = friend => {
  return {
    type: OPEN_EDIT,
    payload: friend
  };
};

export const editFriend = friend => dispatch => {
  axios
    .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    .then(res =>
      dispatch({
        type: EDIT_FRIEND_COMPLETED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: EDIT_FRIEND_FAILED,
        error: 'request failed'
      })
    );
};
