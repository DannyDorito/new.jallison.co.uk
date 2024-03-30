import { SVGProps } from 'react';
import { BoxWithIconProps } from './BoxWithIconProps';
import { Watchers } from '../types/RepositoryOwnerBase';

export class ProjectsBoxProps extends BoxWithIconProps {
  stargazerCount: number | undefined;
  forkCount: number | undefined;
  watchers: Watchers | undefined;

  constructor(
    text: string,
    svg: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    link: string | undefined,
    stargazerCount: number | undefined,
    forkCount: number | undefined,
    watchers: Watchers | undefined,
    className?: string,
  ) {
    super(text, svg, link, className);
    this.stargazerCount = stargazerCount;
    this.forkCount = forkCount;
    this.watchers = watchers;
  }
}
