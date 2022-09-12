import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { addRouteToCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';
import RoutesList from './RoutesList';

function RegionRoutes() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const completedRoutesId = useSelector((state) => state.routes);
  const uncompletedRoutes = filterRoutesByCompleteness(regionId, completedRoutesId, false);

  const handleAddNewRoute = (routeId) => {
    dispatch(addRouteToCompleted(routeId));
  };

  return (
    <div>
      <button className="return">
        <a href={`/region/${regionId}`} className="return-link">🡰 Назад</a>
      </button>

      <CompletedIcon regionId={regionId} />

      <RoutesList routes={uncompletedRoutes} actionText='✔' actionFunction={handleAddNewRoute} />
    </div>
  );
}
export default RegionRoutes;
