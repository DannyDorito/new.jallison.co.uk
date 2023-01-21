export class BoxWithIconProps
{
  text: string;
  src: string;
  alt: string;
  link: string | undefined;

  constructor(
    text: string,
    src: string,
    alt: string,
    link: string | undefined
  )
  {
    this.text = text;
    this.src = src;
    this.alt = alt;
    this.link = link;
  }
};
