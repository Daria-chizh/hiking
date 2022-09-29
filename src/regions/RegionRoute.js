import React from 'react';
import ButtonComeBack from './ButtonComeBack';
import { useParams } from 'react-router';
import CompletedIcon from './CompletedIcon';
import { regionsRoutes } from './data/regionsRoutes';
import { addRouteToCompleted, removeRouteFromCompleted } from '../redux/actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { filterRoutesByCompleteness } from '../utilities/routes';
// import RoutesList from './RoutesList';

function RegionRoute() {
  const { regionId, routeId } = useParams();
  const dispatch = useDispatch();

  const region = regionsRoutes.find(({ id }) => String(id) === String(regionId));
  const route = region.routes.find(({ id }) => String(id) === String(routeId));


  const completedRouteIds = useSelector((state) => state.routes);
  const completedRoutes = filterRoutesByCompleteness(regionId, completedRouteIds, true);



  const handleRemoveNewRoute = (routeId) => {
    dispatch(removeRouteFromCompleted(routeId))
  }

  const handleAddNewRoute = (routeId) => {
    dispatch(addRouteToCompleted(routeId));
  };

  return (
    <div>
      <ButtonComeBack />
      <CompletedIcon regionId={regionId} />
      <div className="margin-top">
        <div className="total-container">
          <div className="container">
            <div className="new-field-column">
              {
                completedRoutes.map(item => item.id).includes(route.id) ?
                  <div>
                    <div className="close" onClick={() => handleRemoveNewRoute(route.id)}>✖</div>
                    <div className="new-field-path-name"> {route.name} </div>
                  </div> :

                  <div className="add" onClick={() => handleAddNewRoute(route.id)}>
                    <div className="new-field-path-name-completed"> {route.name} </div>
                  </div>
              }
              <div className="path-distance">Расстояние: {route.distance}</div>
              <div className="path-elevation"> Набор высоты: {route.elevation} </div>
              <div className="path-time"> Среднее время прохождения: {route.averagePassageTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegionRoute;



