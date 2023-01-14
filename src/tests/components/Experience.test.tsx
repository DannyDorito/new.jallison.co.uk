import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Experience from "../../components/Experience";

describe( "When the page is rendered", () =>
{
  it( "should render the <Experience /> JSX component", async () =>
  {
    render(
      <MemoryRouter>
        <Experience />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Experience" )
    ).toBeInTheDocument();

  } );
} );
