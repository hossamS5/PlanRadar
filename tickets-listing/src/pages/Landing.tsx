import React from "react";
import Container from "../components/atoms/Container/Container";

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <section>
          <h1 className="text-[28px] font-extrabold text-primary-500">
            Available Tickets
          </h1>
        </section>
      </Container>
    </>
  );
};

export default Landing;
