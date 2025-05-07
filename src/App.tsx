
import React from 'react';
import AppRoutes from './routes';
import './index.css';
import { Toaster } from './components/ui/sonner';

const App = () => {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
};

export default App;
