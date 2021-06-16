import {
    GET_ALL_DATA_START,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAIL,
    GET_ALL_STATES_DATA_START,
    GET_ALL_STATES_DATA_SUCCESS,
    GET_ALL_STATES_DATA_FAIL
} from '../actions/covidActions'

const initialState = {
    saved: {},
    data:{},
    isLoading: false,
    error: null
}

function covidReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload.data
            }
        case GET_ALL_DATA_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ALL_STATES_DATA_START:
            return{
                ...state,
                isLoading: true
            }
        case GET_ALL_STATES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: [...action.payload.data]
            }
        case GET_ALL_STATES_DATA_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default covidReducer