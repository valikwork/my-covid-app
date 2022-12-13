import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import covidReducer from './reducers/covidReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    covid: covidReducer,
    user: userReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;