export class BoxWithIconProps
{
  text: string;
  svg: any;
  link: string | undefined;
  className?: string;

  constructor(
    text: string,
    svg: any,
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
