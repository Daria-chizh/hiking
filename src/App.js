import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Regions from './regions/Regions';
import RegionFull from './regions/RegionFull';
import RegionRoutes from './regions/RegionRoutes';
import AddNewRoutes from './regions/AddNewRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regions />} />
        <Route path="/region/:regionId" element={<RegionFull />} />
        <Route path="/routes/:regionId" element={<RegionRoutes />} />
        <Route path="/region/:regionId/completed" element={<AddNewRoutes />} />
      </Routes>
    </Router>
  );
}

/*
/region/:regionId/completed
 */

export default App;
