import { BoxWithIconProps } from "../props/BoxWithIconProps";
import '../scss/components/BoxWithIcon.scss';

const BoxWithIcon = ( { props }: { props: BoxWithIconProps } ) =>
{
  const iconClassName = `${props.className} icon`;
  return (
    <>
      <div className="child">
        {props.link ?
          <p><a href={props.link} target="_blank" rel="noopener noreferrer" className={props.className}>
            <props.svg className={iconClassName} />{props.text}
          </a>
          </p> : <p>{props.text}</p>}
      </div>
    </>
  );
}

export default BoxWithIcon;
