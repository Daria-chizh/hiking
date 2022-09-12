import React, { useState } from 'react';

import { regionsRoutes } from './data/regionsRoutes';

function RoutesSearch() {
  const [searchText, setSearchText] = useState('');
  const [matchedRoutes, setMatchedRoutes] = useState([]);

  const handleSearchChange = ({ target: { value } }) => {
    const matched = [];

    if (value) {
      for (const element of regionsRoutes) {
        for (const route of element.routes) {
          if (route.name.includes(value)) {
            matched.push(route);
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
            <div className="search-element" key={idx}>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RoutesSearch;

