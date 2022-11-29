import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import Home from "../../../pages/Home";

describe("When the page is rendered", () => {
  it("should render <Home /> JSX component", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(
      await screen.findByText("...")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("John Allison")
    ).toBeInTheDocument();
  });
});
