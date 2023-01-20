import { BoxWithIconInterface } from "../types/BoxWithIcon";
import '../scss/BoxWithIcon.scss';

const BoxWithIcon = ( { props }: { props: BoxWithIconInterface } ) =>
{
  return (
    <>
      <div className={props.className}>
        {props.link ?
          <p><a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.src} alt={props.alt}></img>
            {props.text}
          </a>
          </p> : <p>{props.text}</p>}
      </div>
    </>
  );
}

export default BoxWithIcon;
