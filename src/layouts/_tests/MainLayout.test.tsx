import { render } from "@testing-library/react";
import MainLayout from "../MainLayout";
import { vi } from "vitest";

vi.mock("../../assets/icons", () => ({
  PlanradarLogo: () => <svg data-testid="PlanradarLogo" />,
  UsersIcon: () => <svg data-testid="UsersIcon" />,
}));

describe("MainLayout", () => {
  it("match snapshot", () => {
    const { asFragment } = render(<MainLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
