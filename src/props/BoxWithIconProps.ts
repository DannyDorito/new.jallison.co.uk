import { SVGProps } from "react";

export class BoxWithIconProps
{
  text: string;
  svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string | undefined;
  className?: string;

  constructor(
    text: string,
    svg: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    link: string | undefined,
    className?: string
  )
  {
    this.text = text;
    this.svg = svg
    this.link = link;
    this.className = className;
  }
};
