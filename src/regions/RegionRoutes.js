import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { addRouteToCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';
import RoutesList from './RoutesList';
import ButtonComeBack from './ButtonComeBack';

function RegionRoutes() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const completedRoutes = useSelector((state) => state.routes);
  const uncompletedRoutes = filterRoutesByCompleteness(regionId, completedRoutes, false);

  const handleAddNewRoute = (routeId) => {
    dispatch(addRouteToCompleted(routeId));
  };

  return (
    <div>
      <ButtonComeBack />
      <CompletedIcon regionId={regionId} />
      <RoutesList routes={uncompletedRoutes} actionText='✔' actionFunction={handleAddNewRoute} />
    </div>
  );
}
export default RegionRoutes;
