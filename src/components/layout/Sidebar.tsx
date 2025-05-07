
import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, Users, AlertTriangle } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">LED Insight</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`
              }
            >
              <BarChart2 className="mr-3" size={20} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customer-journey"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`
              }
            >
              <Users className="mr-3" size={20} />
              Customer Journey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ruptura"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`
              }
            >
              <AlertTriangle className="mr-3" size={20} />
              Ruptura
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="font-semibold text-lg">JS</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
