
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-led-dark p-4">
      <div className="text-center led-card p-8 max-w-md">
        <h1 className="text-6xl font-bold mb-4 led-gradient-text">404</h1>
        <p className="text-xl text-led-text mb-6">Página não encontrada</p>
        <Link to="/" className="inline-block bg-led-gradient-1 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Voltar ao Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
