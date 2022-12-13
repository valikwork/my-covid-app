import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER
} from '../actions/userActions';

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {

        case REGISTER_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                error: null
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                error: null
            }

        default:
            return state;
    }
}

export default userReducer