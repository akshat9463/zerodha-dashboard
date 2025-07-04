import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import Logout from "./Logout";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
