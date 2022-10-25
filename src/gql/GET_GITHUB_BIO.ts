import { gql } from '@apollo/client/core';

export const GET_GITHUB_BIO = gql`
  {
    user(login: "DannyDorito") {
      bio
    }
  }
`;
