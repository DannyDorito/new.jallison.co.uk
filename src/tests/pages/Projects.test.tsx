import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import Projects from "../../pages/Projects";
import { GetGitHubBio } from "../../gql/GetGitHubBio";
import { GetGitHubRepos } from "../../gql/GetGitHubRepos";

describe( "When the page is rendered", () =>
{
  it( "should render <Projects /> JSX component", async () =>
  {
    const mocks: ReadonlyArray<MockedResponse> = [ {
      request: {
        query: GetGitHubRepos,
        variables: {
          name: "DannyDorito",
          take: 100,
          isFork: null,
          privacy: "PUBLIC"
        },
      },
      result: {
        data: {
          user: {
            bio: "Test Bio",
            __typename: "User"
          }
        }
      }
    } ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Projects className="dark" />
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
