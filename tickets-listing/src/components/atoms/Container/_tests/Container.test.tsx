import { render } from "@testing-library/react";
import Container from "../Container";

describe("Container", () => {
  it("match snapshot", () => {
    const { asFragment } = render(
      <Container>
        <></>
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
