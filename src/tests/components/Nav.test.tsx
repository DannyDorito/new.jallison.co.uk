import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../../components/Nav";

describe( "When page is rendered", () =>
{
  it( "should render <Nav /> JSX component", async () =>
  {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Home" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Contact" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Projects" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Resume" )
    ).toBeInTheDocument();
  } );
} );
