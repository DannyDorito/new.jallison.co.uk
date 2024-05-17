import SvgTwitter from '../svgs/Twitter';
import SvgMail from '../svgs/Mail';
import SvgGithub from '../svgs/Github';
import SvgInstagram from '../svgs/Instagram';
import SvgFileText from '../svgs/FileText';
import SvgLinkedin from '../svgs/Linkedin';
import SvgYoutube from '../svgs/Youtube';
import { SVGProps } from 'react';
import SvgCode from '../svgs/Code';

export interface SocialData
{
  platform: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
  redirect: string | undefined;
}

export const socialData: SocialData[] = [
  {
    platform: 'Twitter',
    icon: SvgTwitter,
    link: 'https://twitter.com/JohnAllis0n',
    redirect: undefined,
  },
  {
    platform: 'Email',
    icon: SvgMail,
    link: 'mailto:contact@jallison.co.uk',
    redirect: undefined,
  },
  {
    platform: 'GitHub',
    icon: SvgGithub,
    link: 'https://github.com/DannyDorito',
    redirect: '/github',
  },
  {
    platform: 'Instagram',
    icon: SvgInstagram,
    link: 'https://www.instagram.com/johnallis0n',
    redirect: undefined,
  },
  {
    platform: 'Resume',
    icon: SvgFileText,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing',
    redirect: undefined,
  },
  {
    platform: 'LinkedIn',
    icon: SvgLinkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
    redirect: undefined,
  },
  {
    platform: 'YouTube',
    icon: SvgYoutube,
    link: 'https://youtube.com/@JohnAllis0n',
    redirect: undefined,
  },
  {
    platform: 'Stack Overflow',
    icon: SvgCode,
    link: 'https://stackoverflow.com/users/12426156/john-allison',
    redirect: '/StackOverflow'
  }
];
