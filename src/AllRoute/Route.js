import React from 'react';

function Route(props) {
  const { item } = props;
  return(
    <div>
      <div className="names">{item.name}</div>
      <a href="#"><img src={item.img} className="images" /></a>
    </div>
  )
}

export default Route;
