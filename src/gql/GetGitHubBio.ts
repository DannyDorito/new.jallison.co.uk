import { gql } from '@apollo/client/core';

export const GetGitHubBio = gql`
  query GetGitHubBio($name: String!) {
    user(login: $name) {
      bio
      pronouns
    }
  }
`;
