
import React from "react";

const GlobalFooter = () => {
  return (
    <div className="w-full py-4 px-6 bg-black flex items-center justify-center gap-2 mt-auto">
      <span className="text-white text-sm">Desenvolvido por:</span>
      <a 
        href="https://www.globalia.com.br" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img 
          src="/lovable-uploads/0e5d21d8-c3ec-462e-a524-a02811576610.png" 
          alt="Globalia" 
          className="h-6" 
        />
      </a>
    </div>
  );
};

export default GlobalFooter;
