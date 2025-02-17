import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
