
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './components/ui/sidebar';
import { CustomSidebar } from './components/layout/CustomSidebar';
import { ResponsiveLayout } from './components/layout/ResponsiveLayout';
import routes from './routes';
import { Toaster } from './components/ui/sonner';
import { FilterProvider } from './contexts/FilterContext';

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CustomSidebar />
          <ResponsiveLayout>
            <FilterProvider>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
              </Routes>
            </FilterProvider>
            <Toaster />
          </ResponsiveLayout>
        </div>
      </SidebarProvider>
    </Router>
  );
};

export default App;
