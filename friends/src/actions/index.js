import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_COMPLETED = 'GET_FRIENDS_COMPLETED';
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED';

export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const DELETE_FRIENDS_COMPLETED = 'DELETE_FRIENDS_COMPLETED';
export const DELETE_FRIENDS_FAILED = 'DELETE_FRIENDS_FAILED';

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
