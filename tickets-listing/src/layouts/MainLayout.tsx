import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/molecules/Nav/Nav";

const MainLayout: React.FC = () => {
  return (
    <div className="h-full">
      <Nav />
      <main className="w-full h-full bg-grayPalette-100 min-h-screen py-9">
        {<Outlet />}
      </main>
    </div>
  );
};

export default MainLayout;
