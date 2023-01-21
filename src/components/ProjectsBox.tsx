import { ProjectsBoxProps } from "../props/ProjectsBoxProps";
import '../scss/components/ProjectsBox.scss';
import SvgStar from "../svgs/Star";
import SvgShare2 from "../svgs/Share2";

const ProjectsBox = ( { props }: { props: ProjectsBoxProps } ) =>
{
  return (
    <>
      <div className="child">
        {props.link ?
          <p><a href={props.link} target="_blank" rel="noopener noreferrer">
            <props.svg />
            {props.text}
          </a>
          </p> : <p>{props.text}</p>}
        {props.stargazerCount ? <p><SvgStar />{props.stargazerCount}</p> : <></>}
        {props.forkCount ? <p><SvgShare2 />{props.forkCount}</p> : <></>}
      </div>
    </>
  );
}

export default ProjectsBox;
