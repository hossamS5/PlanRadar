import { render, screen } from "@testing-library/react";
import TickectsList from "../TickectsList";
import { ListCard } from "../../../../types";

describe("TicketsList", () => {
  it("should render no tickets when tickets array is empty", () => {
    render(<TickectsList tickets={[]} />);

    expect(screen.getByText(/No tickets/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tickets: ListCard[] = [
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
    ];
    const { asFragment } = render(<TickectsList tickets={tickets} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
