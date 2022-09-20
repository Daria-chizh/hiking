import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { removeRouteFromCompleted } from '../redux/actions/actionCreators';
import CompletedIcon from './CompletedIcon';
import { filterRoutesByCompleteness } from '../utilities/routes';
import RoutesList from './RoutesList';
import ButtonComeBack from './ButtonComeBack';

function CompletedRoutes() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const completedRouteIds = useSelector((state) => state.routes);
  const completedRoutes = filterRoutesByCompleteness(regionId, completedRouteIds, true);

  if (completedRoutes.length === 0) {
    return(
      <div>
        <ButtonComeBack />
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
      <ButtonComeBack />
      <CompletedIcon regionId={regionId} />
      <RoutesList routes={completedRoutes} actionText='✖' actionFunction={handleRemoveNewRoute} />

      <div>
        {
          completedRoutes.map((item, idx) =>
              <div className="personal-column" key={`route-${idx}`}>
                {/*<div className="plus" onClick={() => handleRemoveNewRoute(item.id)}>✖</div>*/}
                <div className="container-path-name"> {item.name} </div>

                <div>
                  <label>Личное время прохождения:</label>
                  <input type="text" className="my-path-time" />
                </div>

                <div className="recommendations">
                  <div className="comment">Комментарии о маршруте:</div>
                  <textarea></textarea>
                </div>
              </div>
            )
          }
      </div>

    </div>
  );
}
export default CompletedRoutes;
