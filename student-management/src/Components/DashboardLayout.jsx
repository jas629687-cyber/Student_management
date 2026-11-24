import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard">

      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <main className="content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;

