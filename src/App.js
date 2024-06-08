import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import ComedyPage from './components/pages/ComedySecPage'; 
import NavBarHead from './components/NavBar';

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
      </Routes>
    </Router>
  );
}

export default RouteConfig;