import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { addRouteToCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';

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

      {/*<div className="completed">*/}
      {/*  <a href={`/region/${regionId}/completed`} className="completed-image">{CompletedIcon()}</a>*/}
      {/*</div>*/}

      {/*<RoutesList routes={uncompletedRoutes} actionText='✔' actionFunction={handleAddNewRoute} />*/}

      <div className="total-container">
        <div className="container">
          {
            uncompletedRoutes.map((item, idx) =>
              <div className="column" key={`route-${idx}`}>
                <div className="plus" onClick={() => handleAddNewRoute(item.id)}>✔</div>
                <div className="path-name"> {item.name} </div>
                <div className="path-distance">Расстояние: {item.distance}</div>
                <div className="path-elevation"> Набор высоты: {item.elevation} </div>
                <div className="path-time"> Среднее время прохождения: {item.averagePassageTime}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export default RegionRoutes;
