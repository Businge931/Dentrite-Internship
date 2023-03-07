import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

function Dashboard() {
  return (
    <div className="d-flex p-10 ">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
