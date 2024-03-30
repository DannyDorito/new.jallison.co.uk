import { ProjectsBoxProps } from '../props/ProjectsBoxProps';
import SvgStar from '../svgs/Star';
import SvgShare2 from '../svgs/Share2';
import SvgEye from '../svgs/Eye';
import '../scss/components/ProjectsBox.scss';

const ProjectsBox = ( { props }: { props: ProjectsBoxProps } ) =>
{
  return (
    <>
      <div className='projects-box'>
        {props.link ? (
          <p className='projects-paragraph'>
            <a
              href={props.link}
              className={props.className}
              target='_blank'
              rel='noopener noreferrer'
            >
              <props.svg />
              {props.text}
            </a>
          </p>
        ) : (
          <p className='projects-paragraph'>{props.text}</p>
        )}
        {props.stargazerCount ? (
          <p className='projects-paragraph'>
            <a
              href={props.link + '/stargazers'}
              className={props.className + 'stargazers white'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SvgStar />
              {props.stargazerCount}
            </a>
          </p>
        ) : (
          <></>
        )}
        {props.forkCount ? (
          <p className='projects-paragraph'>
            <a
              href={props.link + '/forks'}
              className={props.className + 'forks white'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SvgShare2 />
              {props.forkCount}
            </a>
          </p>
        ) : (
          <></>
        )}
        {props.watchers?.totalCount ? (
          <p className='projects-paragraph'>
            <a
              href={props.link + '/watchers'}
              className={props.className + 'watchers white'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SvgEye />
              {props.watchers?.totalCount}
            </a>
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProjectsBox;
