import SvgTwitter from '../svgs/Twitter';
import SvgMail from '../svgs/Mail';
import SvgGithub from '../svgs/Github';
import SvgInstagram from '../svgs/Instagram';
import SvgFileText from '../svgs/FileText';
import SvgLinkedin from '../svgs/Linkedin';
import SvgYoutube from '../svgs/Youtube';
import { SVGProps } from 'react';

export interface SocialData {
  platform: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
  path: string | undefined;
}

export const socialData: SocialData[] = [
  {
    platform: 'Twitter',
    icon: SvgTwitter,
    link: 'https://twitter.com/JohnAllis0n',
    path: undefined,
  },
  {
    platform: 'Email',
    icon: SvgMail,
    link: 'mailto:contact@jallison.co.uk',
    path: undefined,
  },
  {
    platform: 'GitHub',
    icon: SvgGithub,
    link: 'https://github.com/DannyDorito',
    path: '/github',
  },
  {
    platform: 'Instagram',
    icon: SvgInstagram,
    link: 'https://www.instagram.com/johnallis0n',
    path: undefined,
  },
  {
    platform: 'Resume',
    icon: SvgFileText,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing',
    path: undefined,
  },
  {
    platform: 'LinkedIn',
    icon: SvgLinkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
    path: undefined,
  },
  {
    platform: 'YouTube',
    icon: SvgYoutube,
    link: 'https://youtube.com/@JohnAllis0n',
    path: undefined,
  },
];
