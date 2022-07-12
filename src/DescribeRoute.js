import React from 'react';

function DescribeRoute(props) {
  const { item } = props;
  return(
  <div>
    <a href="#"><img src={item.img} className="small-photos" /></a>
    <div className="description">{item.description}</div>
    <button>Карта</button>
    <button>Маршруты</button>
  </div>
  )
}

export default DescribeRoute;
