import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GET_GITHUB_USER } from '../gql/GET_GITHUB_USER';
import '../scss/_Main.scss';
import '../scss/Projects.scss';

const Projects = () => {
  const ignoredProjects: string[] = ['DannyDorito', `ARMA-2-Wasteland`];
  const { loading, error, data } = useQuery<RepositoryOwnerBase>(GET_GITHUB_USER);
  if (error) {
    return <>Error: {error}</>;
  } else if (loading) {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          <h2 className='no-select'>Loading...</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          {data?.repositoryOwner?.repositories?.nodes?.filter(f => !ignoredProjects.includes(f.name))
            .map((item) => (
              <a href={item.url?.toString()} key={item.name?.toLowerCase()}>
                {item.name?.replaceAll('-', ' ')}
              </a>
            ))}
        </div>
      </>
    );
  }
};

export default Projects;
