import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
} from "../actions/userActions";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
  userInfo: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null,
      };

    case GET_USER_INFO_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: null,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
