import { regionsRoutes } from '../regions/data/regionsRoutes';

export function filterRoutesByCompleteness(regionId, completedRoutesId, isComplete) {
  const routes = [];

  const regionRoutes = regionsRoutes.find(({ id }) => String(id) === String(regionId)).routes;
  for (const item of regionRoutes) {
    if (isComplete ? completedRoutesId.includes(item.id) : !completedRoutesId.includes(item.id)) {
      routes.push(item);
    }
  }

  return routes;
}
