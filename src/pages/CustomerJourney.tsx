import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import CustomerJourneyMap from "../components/customer-journey/CustomerJourneyMap";
import CustomerJourneyMetrics from "../components/customer-journey/CustomerJourneyMetrics";
import CustomerSegments from "../components/customer-journey/CustomerSegments";
import TouchpointAnalysis from "../components/customer-journey/TouchpointAnalysis";
import SentimentAnalysis from "../components/customer-journey/SentimentAnalysis";
import ChannelPerformance from "../components/customer-journey/ChannelPerformance";

const CustomerJourney = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };
  
  return (
    <div className="flex min-h-screen bg-led-dark overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 ${
        isMobile ? "" : (sidebarCollapsed ? "ml-20" : "ml-64")
      }`}>
        <Header sidebarCollapsed={sidebarCollapsed} title="Customer Journey" toggleSidebar={toggleSidebar} />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Customer Journey Analysis</h1>
            <p className="text-gray-400">Visualize and optimize the customer experience across all touchpoints</p>
          </div>
          
          <div className="mb-6">
            <CustomerJourneyMetrics />
          </div>
          
          <div className="mb-6">
            <CustomerJourneyMap />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <CustomerSegments />
            <TouchpointAnalysis />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SentimentAnalysis />
            <ChannelPerformance />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerJourney;
