import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import Projects from "../../../pages/Projects";

describe( "When the page is rendered", () =>
{
  it( "should render <Projects /> JSX component", async () =>
  {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(
      await screen.findByText( "..." )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Projects" )
    ).toBeInTheDocument();
  } );
} );
