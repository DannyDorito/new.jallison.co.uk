import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { GetGitHubRepos } from "../../gql/GetGitHubRepos";
import { GetGitHubBio } from "../../gql/GetGitHubBio";
import RouterSetup from "../../components/RouterSetup";


describe( "When the page is initially loaded", () =>
{
  it( "should render <RouterSetup /> JSX component", async () =>
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
            __typename: "User"
          }
        }
      }
    },
    {
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
          repositoryOwner: {
            repositories: {
              nodes: [ {
                name: "test-name",
                url: "https://example.com",
                stargazerCount: 1,
                forkCount: 1,
                __typename: "Node",
              } ]
            }
          }
        }
      }
    } ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterSetup />
      </MockedProvider>
    );

    expect(
      await screen.findByText( "Contact me" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Projects" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "Skills" )
    ).toBeInTheDocument();

    expect(
      await screen.findByText( "John Allison" )
    ).toBeInTheDocument();
  } );
} );

