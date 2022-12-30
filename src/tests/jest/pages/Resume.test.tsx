import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Resume from "../../../pages/Resume";

describe( "When the page is rendered", () =>
{
  it( "should render <Resume /> JSX component", async () =>
  {
    render(
      <MemoryRouter>
        <Resume />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Skills" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Education" )
    ).toBeInTheDocument();
  } )
} );
