import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GetGitHubRepos } from '../gql/GetGitHubRepos';
import '../scss/Projects.scss';
import BoxWithIcon from '../components/BoxWithIcon';
import terminal from '../icons/terminal.svg';

const Projects = () =>
{
  const ignoredProjects: string[] = [ 'DannyDorito' ];
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
    return (
      <>
        Error: {error}
      </>
    )
  }
  else if ( loading )
  {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          <h2 className='no-select'>...</h2>
        </div>
      </>
    );
  }
  else
  {
    return (
      <>
        <div>
          <h1 className='no-select'>Projects</h1>
          <div className="parent">
            {data?.repositoryOwner?.repositories?.nodes?.filter( f => !ignoredProjects.includes( f.name ) )
              .map( ( item ) => (
                <BoxWithIcon props={{ className: "child", text: item.name?.replaceAll( '-', ' ' ), src: terminal, alt: "Terminal", link: item.url }} key={item.name?.toLowerCase()} />
              ) )}
          </div>
        </div>
      </>
    );
  }
};

export default Projects;
