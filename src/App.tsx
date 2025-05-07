
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import CustomerJourney from './pages/CustomerJourney';
import Ruptura from './pages/Ruptura';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/customer-journey" element={<CustomerJourney />} />
        <Route path="/ruptura" element={<Ruptura />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
