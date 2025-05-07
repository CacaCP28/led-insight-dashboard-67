
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-4 px-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex justify-center items-center gap-3">
        <span className="text-sm text-gray-600 dark:text-gray-400">Desenvolvido por</span>
        <a href="https://globalia.com.br" target="_blank" rel="noopener noreferrer">
          <img 
            src="/lovable-uploads/2ebdaa22-5e48-4118-9f3e-0d9083f4df44.png" 
            alt="GlobalIA" 
            className="h-6" 
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
