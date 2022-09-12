import React from 'react';

function RegionShort(props) {
  const { region } = props;

  return <>
    <div className="names">{region.name}</div>
    <a href= {`/region/${region.regionId}`}>
      <img src={region.img} className="images" />
    </a>
  </>;
}

export default RegionShort;
