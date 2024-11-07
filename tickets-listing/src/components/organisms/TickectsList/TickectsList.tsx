import React from "react";
import TicketCard from "../../molecules/TicketCard/TicketCard";

const TickectsList: React.FC = () => {
  const list = [
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {list.map((item) => (
        <TicketCard key={item.id} card={item} />
      ))}
    </section>
  );
};

export default TickectsList;
