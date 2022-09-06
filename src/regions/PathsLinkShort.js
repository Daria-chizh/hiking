import React from 'react';

function PathLinkShort(props) {
  const { item } = props;
  return (
    <div>
      <a href= {`/paths/${item.routeId}`}>
      </a>
    </div>
  );
}

export default PathLinkShort;
