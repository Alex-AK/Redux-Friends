import {
  GET_FRIENDS,
  GET_FRIENDS_COMPLETED,
  GET_FRIENDS_FAILED,
  DELETE_FRIENDS,
  DELETE_FRIENDS_COMPLETED,
  DELETE_FRIENDS_FAILED,
  ADD_FRIENDS,
  ADD_FRIENDS_COMPLETED,
  ADD_FRIENDS_FAILED,
  EDIT_FRIEND,
  EDIT_FRIEND_COMPLETED,
  EDIT_FRIEND_FAILED,
  OPEN_EDIT
} from '../actions';

const initialState = {
  friends: [],
  isLoading: false,
  error: '',
  isEditing: false,
  activeEdit: {}
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
    case DELETE_FRIENDS:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case DELETE_FRIENDS_COMPLETED:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case DELETE_FRIENDS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: 'It broke.'
      };
    case ADD_FRIENDS:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case ADD_FRIENDS_COMPLETED:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case ADD_FRIENDS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: 'It broke.'
      };
    case OPEN_EDIT:
      return {
        ...state,
        isEditing: true,
        activeEdit: action.payload
      };
    case EDIT_FRIEND:
      return {
        ...state,
        error: ''
      };
    case EDIT_FRIEND_COMPLETED:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case EDIT_FRIEND_FAILED:
      return {
        ...state,
        isLoading: false,
        error: 'It broke.'
      };
    default:
      return state;
  }
};
