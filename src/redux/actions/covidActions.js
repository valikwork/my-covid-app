import axios from "axios"

export const GET_ALL_DATA_START = 'GET_ALL_DATA_START'
export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS'
export const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL'

export const GET_ALL_STATES_DATA_START = 'GET_ALL_STATES_DATA_START'
export const GET_ALL_STATES_DATA_SUCCESS = 'GET_ALL_STATES_DATA_SUCCESS'
export const GET_ALL_STATES_DATA_FAIL = 'GET_ALL_STATES_DATA_FAIL'

export const GET_ALL_COUNTRIES_DATA_START = 'GET_ALL_COUNTRIES_DATA_START'
export const GET_ALL_COUNTRIES_DATA_SUCCESS = 'GET_ALL_COUNTRIES_DATA_SUCCESS'
export const GET_ALL_COUNTRIES_DATA_FAIL = 'GET_ALL_COUNTRIES_DATA_FAIL'


export const getAllData = () => {
    return dispatch => {
        dispatch(getAllDataStart());
        axios.get(`${process.env.REACT_APP_API_V3_URL}/all`)
            .then(res => {
                console.log(res.data);
                dispatch(getAllDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(getAllDataFail(err.error))
            })
    }
}
export const getAllDataStart = () => {
    return {
        type: GET_ALL_DATA_START
    }
}
export const getAllDataSuccess = (data) => {
    return {
        type: GET_ALL_DATA_SUCCESS,
        payload: {
            data
        }
    }
}
export const getAllDataFail = (error) => {
    return {
        type: GET_ALL_DATA_FAIL,
        payload: {
            error
        }
    }
}

////////

export const getAllStatesData = () => {
    return dispatch => {
        dispatch(getAllStatesDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/states`)
            .then(res => {
                console.log(res.data);
                dispatch(getAllStatesDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(getAllStatesDataFail(err.error))
            })
    }
}
export const getAllStatesDataStart = () => {
    return {
        type: GET_ALL_STATES_DATA_START
    }
}
export const getAllStatesDataSuccess = (data) => {
    return {
        type: GET_ALL_STATES_DATA_SUCCESS,
        payload: {
            data
        }
    }
}
export const getAllStatesDataFail = (error) => {
    return {
        type: GET_ALL_STATES_DATA_FAIL,
        payload: {
            error
        }
    }
}

// export const getAllCountriesData = () => {
//     return {
//         type: GET_ALL_COUNTRIES_DATA
//     }
// }


