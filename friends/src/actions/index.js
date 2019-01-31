import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_COMPLETED = 'GET_FRIENDS_COMPLETED';
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED';

export const getFriends = () => dispatch => {
  dispatch({
    type: GET_FRIENDS
  });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res =>
      setTimeout(
        () =>
          dispatch({
            type: GET_FRIENDS_COMPLETED,
            payload: res.data
          }),
        2000
      )
    )
    .catch(err =>
      dispatch({
        type: GET_FRIENDS_FAILED,
        error: 'request failed'
      })
    );
};
