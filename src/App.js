import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import ComedyPage from './components/pages/ComedySecPage'; 
import TvShowSecPage from './components/pages/TvShowSecPage';
import TopPicks from './components/pages/TopPicks';

// npm run deploy

const RouteConfig = () => {
  return (
    <Router>
      
      <Routes>
        {/* Mainpage routes */}
        <Route index element={<MainPage />} />
        <Route path='/MovieBlocks-Ecommerce-Website-Template' element={<MainPage />} />
       
        {/* Comedy section routes */}
        <Route path="/comedy" element={<ComedyPage />} />

        {/* Tv show Section */}
        <Route path="/tvshow" element={<TvShowSecPage />} />

        {/* top picks */}
        <Route path="/toppicks" element={<TopPicks />} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;