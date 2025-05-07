
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

import Layout from './components/layout/Layout';
import Index from './pages/Index';
import CustomerJourney from './pages/CustomerJourney';
import Ruptura from './pages/Ruptura';
import NotFound from './pages/NotFound';
import Devices from './pages/Devices';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-led-background overflow-hidden">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/customer-journey" element={<CustomerJourney />} />
            <Route path="/ruptura" element={<Ruptura />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
