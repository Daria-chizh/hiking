import { ADD_ROUTE_TO_COMPLETED, REMOVE_ROUTE_FROM_COMPLETED } from '../actions/actionTypes';

export const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === ADD_ROUTE_TO_COMPLETED || action.type === REMOVE_ROUTE_FROM_COMPLETED) {
    const { routes } = store.getState();
    localStorage.setItem('routes', JSON.stringify(routes));
  }
};
