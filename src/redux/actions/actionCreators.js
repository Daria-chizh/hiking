import {
  ADD_ROUTE_TO_COMPLETED, REMOVE_ROUTE_FROM_COMPLETED, CLEAR_COMPLETED, ADD_COMPLETED_ROUTE_INFO,
} from './actionTypes';


export function addRouteToCompleted(routeId) {
  return { type: ADD_ROUTE_TO_COMPLETED, payload: { routeId } };
}

export function removeRouteFromCompleted(routeId) {
  return { type: REMOVE_ROUTE_FROM_COMPLETED, payload: { routeId } };
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED };
}

export function addInfoForCompletedRoute(routeId, time, description) {
  return { type: ADD_COMPLETED_ROUTE_INFO, payload: { routeId, time, description } };
}
