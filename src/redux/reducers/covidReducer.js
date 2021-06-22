import {
    GET_ALL_DATA_START,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAIL,
    GET_ALL_STATES_DATA_START,
    GET_ALL_STATES_DATA_SUCCESS,
    GET_ALL_STATES_DATA_FAIL,
    GET_ONE_STATE_DATA_START,
    GET_ONE_STATE_DATA_SUCCESS,
    GET_ONE_STATE_DATA_FAIL,
    GET_ALL_DATA,
    GET_ALL_STATES_DATA,
    GET_ONE_STATE_DATA,
    GET_ALL_COUNTRIES_DATA_START,
    GET_ALL_COUNTRIES_DATA,
    GET_ALL_COUNTRIES_DATA_SUCCESS,
    GET_ALL_COUNTRIES_DATA_FAIL,
    GET_ONE_COUNTRY_DATA_START,
    GET_ONE_COUNTRY_DATA,
    GET_ONE_COUNTRY_DATA_SUCCESS,
    GET_ONE_COUNTRY_DATA_FAIL,
    GET_ALL_VACCINE_DATA,
    GET_ALL_VACCINE_DATA_START,
    GET_ALL_VACCINE_DATA_SUCCESS,
    GET_ALL_VACCINE_DATA_FAIL
} from '../actions/covidActions'

const initialState = {
    saved: {},
    data:{},
    mapInfo: [],
    dataType: '',
    isLoading: false,
    error: null
}

function covidReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_DATA_START:
            return {
                ...state,
                dataType: GET_ALL_DATA,
                isLoading: true
            }
        case GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
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
                dataType: GET_ALL_STATES_DATA,
                isLoading: true
            }
        case GET_ALL_STATES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            }
        case GET_ALL_STATES_DATA_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ONE_STATE_DATA_START:
            return{
                ...state,
                dataType: GET_ONE_STATE_DATA,
                isLoading: true
            }
        case GET_ONE_STATE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: {...action.payload.data}
            }
        case GET_ONE_STATE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ALL_COUNTRIES_DATA_START:
            return {
                ...state,
                dataType: GET_ALL_COUNTRIES_DATA,
                isLoading: true
            }
        case GET_ALL_COUNTRIES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload,
                mapInfo: action.payload.map((e, i) => ({...e.countryInfo, cases: e.cases}))
            }
        case GET_ALL_COUNTRIES_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ONE_COUNTRY_DATA_START:
            return {
                ...state,
                dataType: GET_ONE_COUNTRY_DATA,
                isLoading: true
            }
        case GET_ONE_COUNTRY_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mapInfo: [],
                data: {...action.payload.data}
            }
        case GET_ONE_COUNTRY_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                mapInfo: [],
                error: action.payload
            }
        
        case GET_ALL_VACCINE_DATA_START:
            return {
                ...state,
                dataType: GET_ALL_VACCINE_DATA,
                isLoading: true
            }
        case GET_ALL_VACCINE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mapInfo: [],
                data: action.payload
            }
        case GET_ALL_VACCINE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                mapInfo: [],
                error: action.payload
            }



        default:
            return state
    }
}

export default covidReducer