import { ProjectsBoxProps } from "../props/ProjectsBoxProps";
import star from '../icons/star.svg';
import share2 from '../icons/share-2.svg';
import '../scss/components/ProjectsBox.scss';

const ProjectsBox = ( { props }: { props: ProjectsBoxProps } ) =>
{
  return (
    <>
      <div className="child">
        {props.link ?
          <p><a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.src} alt={props.alt}></img>
            {props.text}
          </a>
          </p> : <p>{props.text}</p>}
        {props.stargazerCount ? <p><img src={star} alt="star"></img>{props.stargazerCount}</p> : <></>}
        {props.forkCount ? <p><img src={share2} alt="share"></img>{props.forkCount}</p> : <></>}
      </div>
    </>
  );
}

export default ProjectsBox;
