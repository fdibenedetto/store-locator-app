import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import FooterNav from './components/FooterNav';

export default function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/home' element={<Home />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </div>
      <FooterNav />
    </Router>
  );
}