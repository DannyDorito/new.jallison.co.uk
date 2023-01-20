import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import About from "../../pages/About";

describe( "When the page is rendered", () =>
{
  it( "should render <About /> JSX component", async () =>
  {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "About" )
    ).toBeInTheDocument();
  } )
} )
