import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GetGitHubBio } from '../../gql/GetGitHubBio';
import { GetGitHubRepos } from '../../gql/GetGitHubRepos';
import Wrapper from '../../pages/Wrapper';

describe('Wrapper component', () => {
    const mocks: ReadonlyArray<MockedResponse> = [
      {
        request: {
          query: GetGitHubBio,
          variables: {
            name: 'DannyDorito',
          },
        },
        result: {
          data: {
            user: {
              bio: 'Test Bio',
              pronouns: 'they/them',
            },
          },
        },
      },
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
                    watchers: { totalCount: 10 }
                  },
                ],
              },
            },
          },
        },
      },
    ];
    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Wrapper />
        </MockedProvider>,
      );
    });

    it('renders Home component in section-1', async () => {
      const section = await screen.findByTestId('section-1');
      expect(section).toBeInTheDocument();
    });

    it('renders Projects component in section-2', async () => {
      const section = await screen.findByTestId('section-2');
      expect(section).toBeInTheDocument();
    });

    it('renders Resume component in section-3', async () => {
      const section = await screen.findByTestId('section-3');
      expect(section).toBeInTheDocument();
    });

    it('renders Contact component in section-4', async () => {
      const section = await screen.findByTestId('section-4');
      expect(section).toBeInTheDocument();
    });

    it('renders Footer component in section-5', async () => {
      const section = await screen.findByTestId('section-5');
      expect(section).toBeInTheDocument();
    });
  });
