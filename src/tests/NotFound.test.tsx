import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("When page is rendered", () => {
  it("should render <NotFound /> JSX component", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Not Found!")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Go Home")
    ).toBeInTheDocument();
  });
});
