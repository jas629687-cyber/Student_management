import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Student Dashboard</h1>
      <p>Manage your student information easily.</p>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Students</h3>
          <h1>120</h1>
        </div>

        <div className="stat-card">
          <h3>Departments</h3>
          <h1>5</h1>
        </div>

        <div className="stat-card">
          <h3>Active Students</h3>
          <h1>110</h1>
        </div>
      </div>

      <Link to="/students" className="view-btn">
        View Students
      </Link>
    </div>
  );
}

export default Home;