
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './Layout';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Layout>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default MainLayout;
