import { createStore, combineReducers, applyMiddleware } from 'redux';

import { localStorageMiddleware } from './localStorageMiddleware';

import routeReducer from "../reducers/routeReducer";

const reducer = combineReducers({
  routes: routeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(localStorageMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
