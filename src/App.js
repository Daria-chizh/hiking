import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Regions from './regions/Regions';
import RegionFull from './regions/RegionFull';
import RegionRoutes from './regions/RegionRoutes';
import CompletedRoutes from './regions/CompletedRoutes';
import RegionRoute from './regions/RegionRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regions />} />
        <Route path="/region/:regionId" element={<RegionFull />} />
        <Route path="/region/:regionId/routes" element={<RegionRoutes />} />
        <Route path="/region/:regionId/routes/:routeId" element={<RegionRoute />} />
        <Route path="/region/:regionId/completed" element={<CompletedRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
