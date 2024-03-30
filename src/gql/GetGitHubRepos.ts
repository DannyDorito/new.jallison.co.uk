import { gql } from '@apollo/client/core';

export const GetGitHubRepos = gql`
  query GetGitHubRepositories(
    $name: String!
    $take: Int
    $isFork: Boolean
    $privacy: RepositoryPrivacy
  ) {
    repositoryOwner(login: $name) {
      repositories(first: $take, isFork: $isFork, privacy: $privacy) {
        nodes {
          name
          url
          stargazerCount
          forkCount
          watchers(first: 1) {
            totalCount
          }
        }
      }
    }
  }
`;
