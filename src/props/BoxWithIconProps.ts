export class BoxWithIconProps
{
  text: string;
  svg: any;
  link: string | undefined;

  constructor(
    text: string,
    svg: any,
    link: string | undefined
  )
  {
    this.text = text;
    this.svg = svg
    this.link = link;
  }
};
