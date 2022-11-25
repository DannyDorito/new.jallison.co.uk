import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../pages/Nav";

describe("When page is rendered", () => {
  it("should render <Nav /> JSX component", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Home")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Contact")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Projects")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Resume")
    ).toBeInTheDocument();
  });
});
