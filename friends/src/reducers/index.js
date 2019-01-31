import {
  GET_FRIENDS,
  GET_FRIENDS_COMPLETED,
  GET_FRIENDS_FAILED
} from '../actions';

const initialState = {
  friends: [],
  isLoading: false,
  error: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case GET_FRIENDS_COMPLETED:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case GET_FRIENDS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: 'It broke.'
      };
    default:
      return state;
  }
};
