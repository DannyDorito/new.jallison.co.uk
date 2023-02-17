import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Education from "../../components/Education";
import { education } from "../../data/EducationData";

describe( "When the page is rendered", () =>
{
  it( "should render the <Education /> JSX component", async () =>
  {
    const expectedEducation = education;
    render(
      <MemoryRouter>
        <Education />
      </MemoryRouter>
    );

    expect(
      await screen.findByText( "Education" )
    ).toBeInTheDocument();

    expectedEducation.forEach( async expected =>
    {
      expect(
        await screen.findByText( expected.institution )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.qualification )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.result )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( expected.location )
      ).toBeInTheDocument();

      expect(
        await screen.findByText( `${ expected.startDate.toLocaleString( 'default', { month: 'long' } ) } ${ expected.startDate.getFullYear() } - ${ expected.endDate.toLocaleString( 'default', { month: 'long' } ) } ${ expected.endDate.getFullYear() }` )
      ).toBeInTheDocument();
    } );
  } );
} );
