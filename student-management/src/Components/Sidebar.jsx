import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>

      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/about">About</NavLink>
    </aside>
  );
}

export default Sidebar;