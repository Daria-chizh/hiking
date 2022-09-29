import React from 'react';

export default function RoutesList(props) {
  const { routes, actionText, actionFunction } = props;
  return (
    <>
      <div className="total-container">
        <div className="container">
          {
            routes.map((item, idx) =>
              <div className="column" onClick={() => actionFunction(item.id)} key={`route-${idx}`}>
                <div className="close">{actionText}</div>
                {
                  actionText !== '' ?
                    <div className="path-name-completed"> {item.name} </div> :
                    <div className="path-name">{item.name}</div>
                }

                <div className="path-distance">Расстояние: {item.distance}</div>
                <div className="path-elevation"> Набор высоты: {item.elevation} </div>
                <div className="path-time"> Среднее время прохождения: {item.averagePassageTime}</div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
