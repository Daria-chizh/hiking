import React, { useState } from 'react';

import { regionsRoutes } from './data/regionsRoutes';

function RoutesSearch() {
  const [searchText, setSearchText] = useState('');
  const [matchedRoutes, setMatchedRoutes] = useState([]);

  const handleSearchChange = ({ target: { value } }) => {
    const matched = [];

    if (value) {
      for (const element of regionsRoutes) {
        for (const { id, name, distance, elevation, averagePassageTime } of element.routes) {
          if (name.includes(value)) {
            matched.push({regionId: element.id, id: id, name: name, distance: distance, elevation: elevation, averagePassageTime: averagePassageTime});
          }
        }
      }
    }
    setMatchedRoutes(matched);
    setSearchText(value);
  }

  return (
    <div>
      <div className="search-container">
        <input type="search" className="search" placeholder="Поиск..." value={searchText} onChange={handleSearchChange} />
      </div>

      <div className="search-field">
        {
          matchedRoutes.map((item, idx) => (
              <a href={`/region/${item.regionId}/routes/${item.id}`} className="link-field">
                <div className="search-element" key={idx}>
                  {item.name}
                </div>
              </a>
          ))
        }
      </div>
    </div>
  );
}

export default RoutesSearch;

