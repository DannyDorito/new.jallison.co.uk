import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../../../pages/Contact";
import { socialData } from "../../../types/SocialData";

describe( "When the page is rendered", () =>
{
  it( "should render <Contact /> JSX component", async () =>
  {
    const expectedSocialData = socialData;
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Contact me" )
    ).toBeInTheDocument();

    expectedSocialData.forEach( async expected =>
    {
      expect(
        await screen.findByText( expected.platform )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.platform )
      ).toHaveAttribute( 'href', expected.link );
    } );
  } );
} );
