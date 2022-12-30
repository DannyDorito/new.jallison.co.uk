import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../../../pages/NotFound";

describe( "When page is rendered", () =>
{
  it( "should render <NotFound /> JSX component", async () =>
  {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Not Found!" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Go Home" )
    ).toBeInTheDocument();
  } );
} );
