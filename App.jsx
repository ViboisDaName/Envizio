import React from 'react'

import { Routes, Route, Router } from 'react-router-dom';

import OverviewPage from './pages/OverviewPage';

import Sidebar from './components/common/Sidebar';
import AnalyticsPage from './pages/AnalyticsPage';
import OrdersPage from './pages/OrdersPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-green-800
        to-green-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>

      <Sidebar />
        <Router> 
          <Routes>
            <Route path='/' element={<OverviewPage/>}/> 
            <Route path='/analytics' element={<AnalyticsPage/>}/>
            <Route path='/orders' element={<OrdersPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
