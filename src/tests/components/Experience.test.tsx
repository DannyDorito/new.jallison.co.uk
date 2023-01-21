import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Experience from "../../components/Experience";
import { experience } from "../../types/ExperienceData";

describe( "When the page is rendered", () =>
{
  it( "should render the <Experience /> JSX component", async () =>
  {
    const expectedExperience = experience;
    render(
      <MemoryRouter>
        <Experience />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Experience" )
    ).toBeInTheDocument();

    expectedExperience.forEach( async expected =>
    {
      expect(
        await screen.findByText( expected.company )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.title )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.location )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.workFromHome )
      ).toBeInTheDocument();
    } )
  } );
} );
