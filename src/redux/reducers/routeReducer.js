import {
  ADD_ROUTE_TO_COMPLETED, REMOVE_ROUTE_FROM_COMPLETED, CLEAR_COMPLETED, ADD_COMPLETED_ROUTE_INFO
} from '../actions/actionTypes';

const initialState = JSON.parse(localStorage.getItem('routes') || null) || [];

export default function routeReducer(state = initialState, action) {
  const { routeId, time, description } = action.payload || {};

  switch (action.type) {
    case ADD_ROUTE_TO_COMPLETED:
      if (state.some(({ id }) => id === routeId)) {
        return state;
      }
      return [...state, { id: routeId }];

    case REMOVE_ROUTE_FROM_COMPLETED:
      return state.filter(({ id }) => id !== routeId);

    case CLEAR_COMPLETED:
      return [];

    case ADD_COMPLETED_ROUTE_INFO: {
      const updatedState = [...state];
      const route = updatedState.find(({ id }) => id === routeId);

      if (time !== undefined) {
        route.time = time;
      }

      if (description !== undefined) {
        route.description = description;
      }

      return updatedState;
    }

    default:
      return state;
  }
}
