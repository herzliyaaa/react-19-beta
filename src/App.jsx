import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageLayout from './components/layout';
import NotFound from './pages/NotFound';
import './App.css';

// Wrap the Dashboard component with PageLayout
const DashboardWithLayout = PageLayout(Dashboard);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardWithLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
