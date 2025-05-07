
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './pages/Index';
import Reports from './pages/Reports';
import Devices from './pages/Devices';
import Ruptura from './pages/Ruptura';
import CustomerJourney from './pages/CustomerJourney';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import MainLayout from './components/layout/MainLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="reports" element={<Reports />} />
          <Route path="devices" element={<Devices />} />
          <Route path="ruptura" element={<Ruptura />} />
          <Route path="customer-journey" element={<CustomerJourney />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
