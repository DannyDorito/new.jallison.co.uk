import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import RouterSetup from "../../components/RouterSetup";

describe( "When the page is initially loaded", () =>
{
  it( "should render <RouterSetup /> JSX component", async () =>
  {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <RouterSetup />
      </MockedProvider>
    );

    expect(
      await screen.findByText( "Home" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Contact" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Guestbook" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Projects" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Resume" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "John Allison" )
    ).toBeInTheDocument();
  } );
} );
