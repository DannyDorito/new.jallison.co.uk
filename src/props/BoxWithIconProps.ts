export class BoxWithIconProps
{
  className: string | undefined;
  text: string;
  src: string;
  alt: string;
  link: string | undefined;

  constructor(
    className: string | undefined,
    text: string,
    src: string,
    alt: string,
    link: string | undefined
  )
  {
    this.className = className;
    this.text = text;
    this.src = src;
    this.alt = alt;
    this.link = link;
  }
};
