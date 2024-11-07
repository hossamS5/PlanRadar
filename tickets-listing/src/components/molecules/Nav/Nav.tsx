import React from "react";
import Container from "../../atoms/Container/Container";
import { PlanradarLogo, UsersIcon } from "../../../assets/icons";

const Nav: React.FC = () => {
  return (
    <header className="h-[96px] inset-x-0 top-0 z-50  text-mainTheme sticky bg-white shadow-md">
      <Container classess="h-full">
        <nav className="flex items-center gap-16 justify-between w-full h-full">
          <PlanradarLogo />

          <div className="flex items-center gap-2">
            <span className="text-primary-700 text-sm font-medium">
              Hossam Salem
            </span>
            <UsersIcon />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Nav;
