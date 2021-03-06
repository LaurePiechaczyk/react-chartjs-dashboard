import React from "react";
import "./App.css";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <DashboardContextProvider>
    <Sidebar />
      <Routes>
        <Route path="/react-chartjs-dashboard/" element={<DashboardFinance />} />
        <Route path="/react-chartjs-dashboard/dashboard-employees" element={<DashboardEmployees />} />
      </Routes>

    </DashboardContextProvider>
  );
}

