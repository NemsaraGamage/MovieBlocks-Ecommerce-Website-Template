import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/pages/MainPage';
import ComedySecPage from './components/pages/ComedySecPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* default route */}
          <Route path="/" element={<Main />} /> 
          <Route path="/comedy" element={<ComedySecPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;