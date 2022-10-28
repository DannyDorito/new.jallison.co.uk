import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GET_GITHUB_USER } from '../gql/GET_GITHUB_USER';
import '../scss/Projects.scss';

const Projects = () => {
  const ignoredProjects = ['DannyDorito'];
  const { loading, error, data } = useQuery<RepositoryOwnerBase>(GET_GITHUB_USER);
  if (error) {
    return <>Error: {error}</>;
  } else if (loading) {
    return (
      <>
        <h1 className='no-select'>Projects</h1>
        <h2 className='no-select'>Loading...</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Projects</h1>
        {data?.repositoryOwner?.repositories?.nodes
          ?.filter((f) => ignoredProjects.indexOf(f.name))
          .map((item) => (
            <a href={item.url?.toString()} key={item.name?.toString()}>
              {item.name?.toString()}
            </a>
          ))}
      </>
    );
  }
};

export default Projects;
