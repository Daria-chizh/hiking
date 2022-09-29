import { regionsRoutes } from '../regions/data/regionsRoutes';

export function filterRoutesByCompleteness(regionId, completedRoutes, isComplete) {
  const routes = [];

  const regionRoutes = regionsRoutes.find(({ id }) => String(id) === String(regionId)).routes;
  for (const item of regionRoutes) {
    const completedRoute = completedRoutes.find(({ id }) => id === item.id);
    if ((isComplete && completedRoute) || (!isComplete && !completedRoute)) {
      const { time, description } = completedRoute || {};
      routes.push({ ...item, time, description });
    }
  }

  return routes;
}
