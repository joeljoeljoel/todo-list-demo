import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducers = combineReducers({
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
