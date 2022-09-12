import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { removeRouteFromCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';
import RoutesList from './RoutesList';

function CompletedRoutes() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const completedRouteIds = useSelector((state) => state.routes);
  const completedRoutes = filterRoutesByCompleteness(regionId, completedRouteIds, true);

  if (completedRoutes.length === 0) {
    return(
      <div>
        <button className="return">
          <a href={`/region/${regionId}/routes`} className="return-link">🡰 Назад</a>
        </button>
        <div className="none-paths">У вас нет пройденных маршрутов!</div>
        <div className="stop">⛔</div>
      </div>
    )
  }

  const handleRemoveNewRoute = (routeId) => {
    dispatch(removeRouteFromCompleted(routeId))
  }

  return (
    <div>
      <button className="return">
        <a href={`/region/${regionId}/routes`} className="return-link">🡰 Назад</a>
      </button>

      <CompletedIcon regionId={regionId} />
      <RoutesList routes={completedRoutes} actionText='✖' actionFunction={handleRemoveNewRoute} />
    </div>
  );
}
export default CompletedRoutes;
