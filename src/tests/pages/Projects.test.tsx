import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GetGitHubRepos } from '../../gql/GetGitHubRepos';
import Projects from '../../pages/Projects';

describe('When the page is rendered', () => {
  it('should render <Projects /> JSX component', async () => {
    const mocks: ReadonlyArray<MockedResponse> = [
      {
        request: {
          query: GetGitHubRepos,
          variables: {
            name: 'DannyDorito',
            take: 100,
            isFork: null,
            privacy: 'PUBLIC',
          },
        },
        result: {
          data: {
            repositoryOwner: {
              repositories: {
                nodes: [
                  {
                    name: 'test-name',
                    url: 'https://example.com',
                    stargazerCount: 1,
                    forkCount: 1,
                  },
                ],
              },
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Projects className='dark' />
        </MemoryRouter>
      </MockedProvider>,
    );

    expect(await screen.findByText('...')).toBeInTheDocument();

    expect(await screen.findByText('Projects')).toBeInTheDocument();
  });
});
