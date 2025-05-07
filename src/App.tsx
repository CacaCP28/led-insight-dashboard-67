
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';

import Devices from '@/pages/Devices';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import CustomerJourney from '@/pages/CustomerJourney';
import Settings from '@/pages/Settings';
import Ruptura from '@/pages/Ruptura';
import Reports from '@/pages/Reports';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route index element={<Index />} />
            <Route path="/customer-journey" element={<CustomerJourney />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ruptura" element={<Ruptura />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
