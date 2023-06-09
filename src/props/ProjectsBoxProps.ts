import { SVGProps } from 'react';
import { BoxWithIconProps } from './BoxWithIconProps';

export class ProjectsBoxProps extends BoxWithIconProps {
  stargazerCount: number | undefined;
  forkCount: number | undefined;

  constructor(
    text: string,
    svg: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    link: string | undefined,
    stargazerCount: number | undefined,
    forkCount: number | undefined,
    className?: string,
  ) {
    super(text, svg, link, className);
    this.stargazerCount = stargazerCount;
    this.forkCount = forkCount;
  }
}
