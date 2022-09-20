import React from 'react';
// import CompletedIcon from './CompletedIcon';

import ButtonComeBack from './ButtonComeBack';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { filterRoutesByCompleteness } from '../utilities/routes';
import { removeRouteFromCompleted } from '../redux/actions/actionCreators';
import RoutesList from './RoutesList';

function RegionRoute() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const completedRouteIds = useSelector((state) => state.routes);
  const completedRoutes = filterRoutesByCompleteness(regionId, completedRouteIds, true);

  const handleRemoveNewRoute = (routeId) => {
    dispatch(removeRouteFromCompleted(routeId))
  }


  return (
    <div>
      <ButtonComeBack />
      {/*<CompletedIcon regionId={regionId} />*/}
      <div className="margin-top">
        <RoutesList routes={completedRoutes} actionText='✖' actionFunction={handleRemoveNewRoute} />
      </div>
    </div>
  );
}
export default RegionRoute;
