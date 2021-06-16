import { createStore, applyMiddleware, compose } from 'redux';
import covidReducer from './reducers/covidReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    covidReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;