import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/molecules/Nav/Nav";

const MainLayout: React.FC = () => {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <Nav />
      <main className="w-full h-full flex-1 bg-grayPalette-100 py-9">
        {<Outlet />}
      </main>
    </div>
  );
};

export default MainLayout;
