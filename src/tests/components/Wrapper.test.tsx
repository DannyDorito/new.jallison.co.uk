import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { GetGitHubBio } from "../../gql/GetGitHubBio";
import { GetGitHubRepos } from "../../gql/GetGitHubRepos";
import Wrapper from "../../pages/Wrapper";

describe( "When the page is initially loaded", () =>
{
  it( "should render <Wrapper /> JSX component", async () =>
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
        <Wrapper />
      </MockedProvider>
    );

    expect(
      await screen.findByTestId( "section-1" )
    ).toBeInTheDocument();

    expect(
      await screen.findByTestId( "section-2" )
    ).toBeInTheDocument();

    expect(
      await screen.findByTestId( "section-3" )
    ).toBeInTheDocument();

    expect(
      await screen.findByTestId( "section-4" )
    ).toBeInTheDocument();

    expect(
      await screen.findByTestId( "section-5" )
    ).toBeInTheDocument();
  } );
} );

