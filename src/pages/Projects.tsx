import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GetGitHubRepos } from '../gql/GetGitHubRepos';
import '../scss/_Main.scss';
import '../scss/Projects.scss';

const Projects = () =>
{
  const ignoredProjects: string[] = [ 'DannyDorito', `ARMA-2-Wasteland` ];
  const username = "DannyDorito";
  const take = 100;
  const isFork = false;
  const privacy = "PUBLIC";
  const { loading, error, data } = useQuery<RepositoryOwnerBase>( GetGitHubRepos,
    {
      variables:
      {
        name: username,
        take: take,
        isFork: isFork,
        privacy: privacy
      }
    }
  );
  if ( error )
  {
    return <>Error: {error}</>;
  } else if ( loading )
  {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          <h2 className='no-select'>...</h2>
        </div>
      </>
    );
  } else
  {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          {data?.repositoryOwner?.repositories?.nodes?.filter( f => !ignoredProjects.includes( f.name ) )
            .map( ( item ) => (
              <div key={item.name?.toLowerCase()}>
                <a href={item.url?.toString()} key={item.name?.toLowerCase()}>
                  {item.name?.replaceAll( '-', ' ' )}
                </a>
              </div>
            ) )}
        </div>
      </>
    );
  }
};

export default Projects;
