import React from "react";
import { Navbar, Sidebar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomePage;
