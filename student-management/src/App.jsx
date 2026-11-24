import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/Dashboardlayout.jsx";

import Home from "./pages/Home.jsx";
import Students from "./pages/Student.jsx";
import StudentDetails from "./pages/Studentdetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;