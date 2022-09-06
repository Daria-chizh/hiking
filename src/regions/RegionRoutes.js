import React from 'react';
import { useParams } from 'react-router';
import { regionsRoutes } from './regionsRoutes';
import { useSelector, useDispatch } from 'react-redux';
import {addRouteToCompleted, removeRouteFromCompleted} from "../redux/actions/actionCreators";
import MyCompleted from "../descriptions/MyCompleted";

function RegionRoutes() {
  const { regionId } = useParams();
  const dispatch = useDispatch();

  const finishedRouteIds = useSelector((state) => state.routes);
  let finishedRoutes = [];
  let unfinishedRoutes = [];

  // создать finishedRoutes - массив пройденных маршрутов, маршруты с id из массива finishedRouteIds
  // создать unfinishedRoutes - массив непройденных маршрутов
  const regionRoutes = regionsRoutes.find(({ id }) => String(id) === String(regionId)).routes;

  for (const item of regionRoutes) {
      if (finishedRouteIds.includes(item.id)) {
        finishedRoutes.push(item);
      } else {
        unfinishedRoutes.push(item);
      }
    }



  const handleAddNewRoute = (routeId) => {
    dispatch(addRouteToCompleted(routeId));
  };


  const handleRemoveNewRoute = (routeId) => {
    dispatch(removeRouteFromCompleted(routeId))
  }

  return (
    <div>
      <button className="return">
        <a href={`/region/${regionId}`} className="return-link">🡰 Назад</a>
      </button>

     <div className="completed">
       <a href={`/region/${regionId}/completed`} className="completed-image">{MyCompleted()}</a>
    </div>

      <div className="total-container">
        <div className="container">
      {
        finishedRoutes.map((item, idx) =>
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

      <div className="container">
        {
          unfinishedRoutes.map((item, idx) =>
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
