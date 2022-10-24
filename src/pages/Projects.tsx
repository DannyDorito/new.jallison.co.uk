import { gql, useQuery } from '@apollo/client';
import { RepositoryOwner } from '../types/github-user';

const GET_GITHUB_USER = gql`{
  repositoryOwner (login: "DannyDorito") {
    repositories(first: 100, isFork: false, privacy: PUBLIC) {
      nodes {
        name
        url
      }
    }
  }
}`;

function Projects ()
{
    const {loading, error, data } = useQuery<RepositoryOwner>(GET_GITHUB_USER);
    if ( error )
    {
      return (
        <>
          Error: {error}
        </>
      );
    } else if (loading) {
      return (
        <>
          <div>
            <h2>Loading..</h2>
          </div>
        </>
      );
    } else {
      return (
        <>
          <ul>
            {data?.repositories?.nodes.map(item => (
              <li key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </>
      );
    }
}

export default Projects;
