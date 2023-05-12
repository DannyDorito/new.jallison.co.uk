import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import Home from "../../pages/Home";
import { GetGitHubBio } from "../../gql/GetGitHubBio";
import { GraphQLError } from "graphql/error/GraphQLError";

describe( "When the page is rendered", () =>
{
  it( "should render <Home /> JSX component should display a mocked bio response from apollo client on the component", async () =>
  {
    const mocks: ReadonlyArray<MockedResponse> = [ {
      request: {
        query: GetGitHubBio,
        variables: {
          name: "DannyDorito"
        },
      },
      result: {
        data: {
          user: {
            bio: "Test Bio",
            pronouns: "they/them"
          }
        }
      }
    } ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(
      await screen.findByText( "..." )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Test Bio" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "they/them" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "John Allison" )
    ).toBeInTheDocument();
  } )

  it( "should display an network error message", async () =>
  {
    const mocks: ReadonlyArray<MockedResponse> = [ {
      request: {
        query: GetGitHubBio,
        variables: {
          name: "DannyDorito"
        },
      },
      error: new Error( "An error occurred" )
    } ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(
      await screen.findByText( "John Allison" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Error: An error occurred" )
    ).toBeInTheDocument();
  } )

  it( "should display a graphql error message", async () =>
  {
    const mocks: ReadonlyArray<MockedResponse> = [ {
      request: {
        query: GetGitHubBio,
        variables: {
          name: "DannyDorito"
        },
      },
      result: {
        errors: [ new GraphQLError( "GraphQl error" ) ],
      }
    } ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(
      await screen.findByText( "John Allison" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Error: GraphQl error" )
    ).toBeInTheDocument();
  } )
} );
