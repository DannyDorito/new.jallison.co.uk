import { BoxWithIconProps } from "./BoxWithIconProps";

export class ProjectsBoxProps extends BoxWithIconProps
{
  stargazerCount: number | undefined;
  forkCount: number | undefined;

  constructor(
    className: string | undefined,
    text: string,
    src: string,
    alt: string,
    link: string | undefined,
    stargazerCount: number | undefined,
    forkCount: number | undefined
  )
  {
    super(
      className,
      text,
      src,
      alt,
      link );
    this.stargazerCount = stargazerCount;
    this.forkCount = forkCount;
  }
}
