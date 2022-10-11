import { ADD_ROUTE_TO_COMPLETED, REMOVE_ROUTE_FROM_COMPLETED, ADD_COMPLETED_ROUTE_INFO } from '../actions/actionTypes';

export const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === ADD_ROUTE_TO_COMPLETED || action.type === REMOVE_ROUTE_FROM_COMPLETED || action.type === ADD_COMPLETED_ROUTE_INFO) {
    const { routes } = store.getState();
    localStorage.setItem('routes', JSON.stringify(routes));
  }
};
