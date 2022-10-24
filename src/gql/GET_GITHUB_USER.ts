import { gql } from "@apollo/client/core";

export const GET_GITHUB_USER = gql`{
  repositoryOwner (login: "DannyDorito") {
    repositories(first: 100, isFork: false, privacy: PUBLIC) {
      nodes {
        name
        url
      }
    }
  }
}`
