
import React from "react";
import { RouteFlow } from "../components/journey/RouteFlow";

const CustomerJourney = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Jornada do Cliente</h1>
      <p className="mb-6 text-gray-600">Visualize e otimize a experiência do cliente em todos os pontos de contato.</p>
      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="h-[600px]">
          <RouteFlow />
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
