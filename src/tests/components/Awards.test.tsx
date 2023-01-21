import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { awards } from "../../types/AwardsData";
import Awards from "../../components/Awards";

describe( "When the page is rendered", () =>
{
  it( "should render the <Awards /> JSX component", async () =>
  {
    const expectedAwards = awards;
    render(
      <MemoryRouter>
        <Awards />
      </MemoryRouter>
    )

    expect(
      await screen.findByText( "Awards" )
    ).toBeInTheDocument();

    expectedAwards.forEach( async expected =>
    {
      expect(
        await screen.findByText( expected.name )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.additionalInformation )
      ).toBeInTheDocument();
    } );
  } );
} );
