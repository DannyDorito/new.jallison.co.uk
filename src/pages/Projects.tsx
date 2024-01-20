import { useQuery } from '@apollo/client';
import { RepositoryOwnerBase } from '../types/RepositoryOwnerBase';
import { GetGitHubRepos } from '../gql/GetGitHubRepos';
import { ProjectsBoxProps } from '../props/ProjectsBoxProps';
import ProjectsBox from '../components/ProjectsBox';
import SvgTerminal from '../svgs/Terminal';

const Projects = () => {
  const ignoredProjects: string[] = ['DannyDorito', 'A3 Antistasi Docs'];
  const username = 'DannyDorito';
  const take = 100;
  const isFork = null;
  const privacy = 'PUBLIC';
  const { loading, error, data } = useQuery<RepositoryOwnerBase>(GetGitHubRepos, {
    variables: {
      name: username,
      take: take,
      isFork: isFork,
      privacy: privacy,
    },
  });
  if (error) {
    return <>Error: {error}</>;
  } else if (loading) {
    return (
      <>
        <h1 className='no-select'>Projects</h1>
        <h2 className='no-select'>...</h2>
      </>
    );
  } else {
    return (
      <>
        <h1 className='no-select'>Projects</h1>
        <div>
          {data?.repositoryOwner?.repositories?.nodes
            ?.filter((f) => !ignoredProjects.includes(f.name))
            .map((item) => (
              <ProjectsBox
                props={
                  new ProjectsBoxProps(
                    item.name?.replaceAll('-', ' '),
                    SvgTerminal,
                    item?.url,
                    item?.stargazerCount,
                    item?.forkCount,
                    'white',
                  )
                }
                key={item.name?.toLowerCase()}
              />
            ))}
        </div>
      </>
    );
  }
};

export default Projects;
