import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Education from "../../../components/Education";

describe("When the page is rendered", () => {
  it("should render the <Education /> JSX component", async () => {
    render(
      <MemoryRouter>
        <Education />
      </MemoryRouter>
    );

    expect(
      await screen.findByText("Education")
    ).toBeInTheDocument();
  });
});
