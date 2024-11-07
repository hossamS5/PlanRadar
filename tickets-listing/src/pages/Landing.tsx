import React from "react";
import Container from "../components/atoms/Container/Container";
import TickectsList from "../components/organisms/TickectsList/TickectsList";

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-[28px] font-extrabold text-primary-500">
            Available Tickets
          </h1>
        </section>

        <TickectsList />
      </div>
    </Container>
  );
};

export default Landing;
