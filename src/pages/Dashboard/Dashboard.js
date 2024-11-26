import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <nav className="dashboard-nav">
        <Link to="/users" className="dashboard-link">
          Manage Users
        </Link>
        <Link to="/roles" className="dashboard-link">
          Manage Roles
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;
