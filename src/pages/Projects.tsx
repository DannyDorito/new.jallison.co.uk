import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GetGitHubRepos } from '../gql/GetGitHubRepos';
import { ProjectsBoxProps } from '../props/ProjectsBoxProps';
import ProjectsBox from '../components/ProjectsBox';
import '../scss/pages/Projects.scss';
import SvgTerminal from '../svgs/Terminal';

const Projects = () =>
{
  const ignoredProjects: string[] = [ 'DannyDorito' ];
  const username = "DannyDorito";
  const take = 100;
  const isFork = null;
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
                <ProjectsBox props={new ProjectsBoxProps( item.name?.replaceAll( '-', ' ' ), SvgTerminal, item?.url, item?.stargazerCount, item?.forkCount )} key={item.name?.toLowerCase()} />
              ) )}
          </div>
        </div>
      </>
    );
  }
};

export default Projects;
