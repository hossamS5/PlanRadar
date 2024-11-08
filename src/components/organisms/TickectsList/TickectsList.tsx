import React from "react";
import TicketCard from "../../molecules/TicketCard/TicketCard";
import { ListCard } from "../../../types";

interface IProps {
  tickets: ListCard[];
}

const TickectsList: React.FC<IProps> = ({ tickets }) => {
  if (tickets?.length === 0) return <p>No tickets available</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets.map((item) => (
        <TicketCard key={item.id} card={item} />
      ))}
    </section>
  );
};

export default TickectsList;
