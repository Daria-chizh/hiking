import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { removeRouteFromCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';

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

      <div className="total-container">
        <div className="container">
          {
            completedRoutes.map((item, idx) =>
              <div className="column" key={`route-${idx}`}>
                <div className="plus" onClick={() => handleRemoveNewRoute(item.id)}>✖</div>
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
export default CompletedRoutes;
