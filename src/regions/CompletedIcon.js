import React from 'react';
import { useSelector } from 'react-redux';
import { filterRoutesByCompleteness } from '../utilities/routes';

export default function CompletedIcon(props) {
  const { regionId } = props;
  const completedRouteIds = useSelector((state) => state.routes);
  const completedRoutes = filterRoutesByCompleteness(regionId, completedRouteIds, true);

  return (
    <>
      <div className="completed">
        <a href={`/region/${regionId}/completed`} className="completed-image">
          <div className="my-completed">
            <div className="won">🌳</div>
          </div>
        </a>
        {
          completedRoutes.length
            ? <div className="completed-routes">
              <div className="completed-routes-full">{ completedRoutes.length}</div></div>
            : null
        }
      </div>
    </>
  );
}

