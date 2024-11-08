import React from "react";
import Container from "../components/atoms/Container/Container";
import TickectsList from "../components/organisms/TickectsList/TickectsList";

const Landing: React.FC = () => {
  const tickets = [
    {
      id: 1,
      subject: "Projects",
      priority: "low",
      status: "new",
      description: "I am ok please call me now",
    },
    {
      id: 2,
      subject: "Development",
      priority: "high",
      status: "in progress",
      description: "I am ok please call me now",
    },
    {
      id: 3,
      subject: "Electricty",
      priority: "high",
      status: "new",
      description: "I am ok please call me now as i have a big problem",
    },
    {
      id: 4,
      subject: "Building",
      priority: "low",
      status: "done",
      description: "I am ok please call me now",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-[28px] font-extrabold text-primary-500">
            Available Tickets
          </h1>
        </section>

        <TickectsList tickets={tickets} />
      </div>
    </Container>
  );
};

export default Landing;
