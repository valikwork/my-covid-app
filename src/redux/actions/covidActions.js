import axios from "axios"

export const GET_ALL_DATA = 'GET_ALL_DATA'
export const GET_ALL_DATA_START = 'GET_ALL_DATA_START'
export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS'
export const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL'

export const GET_ALL_STATES_DATA = 'GET_ALL_STATES_DATA'
export const GET_ALL_STATES_DATA_START = 'GET_ALL_STATES_DATA_START'
export const GET_ALL_STATES_DATA_SUCCESS = 'GET_ALL_STATES_DATA_SUCCESS'
export const GET_ALL_STATES_DATA_FAIL = 'GET_ALL_STATES_DATA_FAIL'

export const GET_ONE_STATE_DATA = 'GET_ONE_STATE_DATA'
export const GET_ONE_STATE_DATA_START = 'GET_ONE_STATE_DATA_START'
export const GET_ONE_STATE_DATA_SUCCESS = 'GET_ONE_STATE_DATA_SUCCESS'
export const GET_ONE_STATE_DATA_FAIL = 'GET_ONE_STATE_DATA_FAIL'

export const GET_ALL_COUNTRIES_DATA = 'GET_ALL_COUNTRIES_DATA'
export const GET_ALL_COUNTRIES_DATA_START = 'GET_ALL_COUNTRIES_DATA_START'
export const GET_ALL_COUNTRIES_DATA_SUCCESS = 'GET_ALL_COUNTRIES_DATA_SUCCESS'
export const GET_ALL_COUNTRIES_DATA_FAIL = 'GET_ALL_COUNTRIES_DATA_FAIL'

export const GET_ONE_COUNTRY_DATA = 'GET_ONE_COUNTRY_DATA'
export const GET_ONE_COUNTRY_DATA_START = 'GET_ONE_COUNTRY_DATA_START'
export const GET_ONE_COUNTRY_DATA_SUCCESS = 'GET_ONE_COUNTRY_DATA_SUCCESS'
export const GET_ONE_COUNTRY_DATA_FAIL = 'GET_ONE_COUNTRY_DATA_FAIL'

export const GET_ALL_VACCINE_DATA = 'GET_ALL_VACCINE_DATA'
export const GET_ALL_VACCINE_DATA_START = 'GET_ALL_VACCINE_DATA_START'
export const GET_ALL_VACCINE_DATA_SUCCESS = 'GET_ALL_VACCINE_DATA_SUCCESS'
export const GET_ALL_VACCINE_DATA_FAIL = 'GET_ALL_VACCINE_DATA_FAIL'


export const getAllData = () => {
    return dispatch => {
        dispatch(getAllDataStart());
        axios.get(`${process.env.REACT_APP_API_V3_URL}/all`)
            .then(res => {
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
        payload: data
    }
}
export const getAllDataFail = (error) => {
    return {
        type: GET_ALL_DATA_FAIL,
        payload: error
    }
}

////////

export const getAllStatesData = () => {
    return dispatch => {
        dispatch(getAllStatesDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/states`)
            .then(res => {
                dispatch(getAllStatesDataSuccess(JSON.parse(JSON.stringify(res.data))))
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
        payload: data
    }
}
export const getAllStatesDataFail = (error) => {
    return {
        type: GET_ALL_STATES_DATA_FAIL,
        payload: error
    }
}

export const getOneStateData = (name) => {
    return dispatch => {
        dispatch(getOneStateDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/states/${name}`)
            .then(res => {
                delete res.data["state"]
                dispatch(getOneStateDataSuccess(res.data))
            }).catch(err => {
                dispatch(getOneStateDataFail(err))
            })
    }
}
export const getOneStateDataStart = () => {
    return {
        type: GET_ONE_STATE_DATA_START
    }
}
export const getOneStateDataSuccess = (data) => {
    return {
        type: GET_ONE_STATE_DATA_SUCCESS,
        payload: {
            data
        }
    }
}
export const getOneStateDataFail = (error) => {
    return {
        type: GET_ONE_STATE_DATA_FAIL,
        payload: error
    }
}


/////

export const getAllCountriesData = () => {
    return dispatch => {
        dispatch(getAllCountriesDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/countries`)
            .then(res => {
                dispatch(getAllCountriesDataSuccess(res.data))
            })
            .catch(error => {
                dispatch(getAllCountriesDataFail(error))
            })
    }
}
export const getAllCountriesDataStart = () => {
    return {
        type: GET_ALL_COUNTRIES_DATA_START
    }
}
export const getAllCountriesDataSuccess = (data) => {
    return {
        type: GET_ALL_COUNTRIES_DATA_SUCCESS,
        payload: data
    }
}
export const getAllCountriesDataFail = (error) => {
    return {
        type: GET_ALL_COUNTRIES_DATA_FAIL,
        payload: error
    }
}

export const getOneCountryData = (name) => {
    return dispatch => {
        dispatch(getOneCountryDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/countries/${name}`)
            .then(res => {
                dispatch(getOneCountryDataSuccess(res.data))
            })
            .catch(error => {
                dispatch(getOneCountryDataFail(error))
            })
    }
}
export const getOneCountryDataStart = () => {
    return {
        type: GET_ONE_COUNTRY_DATA_START
    }
}
export const getOneCountryDataSuccess = (data) => {
    return {
        type: GET_ONE_COUNTRY_DATA_SUCCESS,
        payload: {
            data
        }
    }
}
export const getOneCountryDataFail = (error) => {
    return {
        type: GET_ONE_COUNTRY_DATA_FAIL,
        payload: error
    }
}

//////

export const getAllVaccineData = () => {
    return dispatch => {
        dispatch(getAllVaccineDataStart())
        axios.get(`${process.env.REACT_APP_API_V3_URL}/vaccine`)
            .then(res => {
                dispatch(getAllVaccineDataSuccess(res.data))
            })
            .catch(error => {
                dispatch(getAllVaccineDataFail(error))
            })
    }
}
export const getAllVaccineDataStart = () => {
    return {
        type: GET_ALL_VACCINE_DATA_START
    }
}
export const getAllVaccineDataSuccess = (data) => {
    return {
        type: GET_ALL_VACCINE_DATA_SUCCESS,
        payload: data
    }
}
export const getAllVaccineDataFail = (error) => {
    return {
        type: GET_ALL_VACCINE_DATA_FAIL,
        payload: error
    }
}