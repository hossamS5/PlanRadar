import React, { useCallback, useEffect, useRef, useState } from "react";
import Container from "../components/atoms/Container/Container";
import TickectsList from "../components/organisms/TickectsList/TickectsList";
import { tickets } from "../../db.json";
import { ListCard } from "../types";

const Landing: React.FC = () => {
  const [fetchedTickets, setFetchedTickets] = useState<ListCard[]>(
    tickets.slice(0, 10)
  );
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  const loadMoreItems = useCallback(() => {
    //Fetch just 10 items every time
    if (tickets.length === fetchedTickets.length) return;

    setFetchedTickets((prevItems) => {
      const nextItems = tickets.slice(prevItems.length, prevItems.length + 10);
      return [...prevItems, ...nextItems];
    });
  }, [tickets]);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-[28px] font-extrabold text-primary-500">
            Available Tickets
          </h1>
        </section>

        <TickectsList tickets={fetchedTickets} />

        <div id="observer" ref={loaderRef} className="h-[20px]" />
      </div>
    </Container>
  );
};

export default Landing;
