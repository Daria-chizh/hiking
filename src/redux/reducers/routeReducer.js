import { ADD_ROUTE_TO_COMPLETED, REMOVE_ROUTE_FROM_COMPLETED, CLEAR_COMPLETED } from '../actions/actionTypes';

const initialState = JSON.parse(localStorage.getItem('routes') || null) || [];

export default function routeReducer(state = initialState, action) {
  const { routeId } = action.payload || {};

  switch (action.type) {
    case ADD_ROUTE_TO_COMPLETED:
      return [...new Set([...state, routeId])];

    case REMOVE_ROUTE_FROM_COMPLETED:
      return state.filter((id) => id !== routeId);

    case CLEAR_COMPLETED:
      return [];

    default:
      return state;
  }
}
