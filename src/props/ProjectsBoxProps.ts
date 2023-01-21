import { BoxWithIconProps } from "./BoxWithIconProps";

export class ProjectsBoxProps extends BoxWithIconProps
{
  stargazerCount: number | undefined;
  forkCount: number | undefined;

  constructor(
    text: string,
    svg: any,
    link: string | undefined,
    stargazerCount: number | undefined,
    forkCount: number | undefined
  )
  {
    super(
      text,
      svg,
      link );
    this.stargazerCount = stargazerCount;
    this.forkCount = forkCount;
  }
}
