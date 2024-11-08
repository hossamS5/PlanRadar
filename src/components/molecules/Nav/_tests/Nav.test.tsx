import { render } from "@testing-library/react";
import Nav from "../Nav";
import { vi } from "vitest";

vi.mock("../../../../assets/icons", () => ({
  PlanradarLogo: () => <svg data-testid="PlanradarLogo" />,
  UsersIcon: () => <svg data-testid="UsersIcon" />,
}));

describe("Nav", () => {
  it("match snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
