import { render, screen } from "@testing-library/react";
import TicketCard from "../TicketCard";
import { ListCard } from "../../../../types";
import "@testing-library/jest-dom";

describe("TicketCard", () => {
  const mockCard: ListCard = {
    id: 1,
    subject: "Projects",
    priority: "low",
    status: "new",
    description: "I am ok please call me now",
  };

  it("renders card information correctly", () => {
    render(<TicketCard card={mockCard} />);
    expect(screen.getByText(mockCard.subject)).toBeInTheDocument();
    expect(screen.getByText(mockCard.status)).toBeInTheDocument();
    expect(screen.getByText(mockCard.priority)).toBeInTheDocument();
    expect(screen.getByText(mockCard.description)).toBeInTheDocument();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<TicketCard card={mockCard} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
