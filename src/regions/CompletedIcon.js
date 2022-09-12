import React from 'react';

export default function CompletedIcon(props) {
  const { regionId } = props;
  return (
    <>
      <div className="completed">
        <a href={`/region/${regionId}/completed`} className="completed-image">
          <div className="my-completed">
            <div className="won">🐾</div>
          </div>
        </a>
      </div>
    </>
  );
}

// извлекать regionId из props'ов

// const completedRouteIds = useSelector((state) => state.routes);
// completedRouteIds.length === количество пройденных маршрутов


