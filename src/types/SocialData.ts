import SvgTwitter from '../svgs/Twitter';
import SvgMail from '../svgs/Mail';
import SvgGithub from '../svgs/Github';
import SvgInstagram from '../svgs/Instagram';
import SvgFileText from '../svgs/FileText';
import SvgLinkedin from '../svgs/Linkedin';
import SvgYoutube from '../svgs/Youtube';

export interface SocialData
{
  platform: string;
  icon: any;
  link: string;
}

export const socialData: SocialData[] = [
  {
    platform: 'Twitter',
    icon: SvgTwitter,
    link: 'https://twitter.com/JohnAllis0n'
  },
  {
    platform: 'Email',
    icon: SvgMail,
    link: 'mailto:contact@jallison.co.uk'
  },
  {
    platform: 'GitHub',
    icon: SvgGithub,
    link: 'https://github.com/DannyDorito'
  },
  {
    platform: 'Instagram',
    icon: SvgInstagram,
    link: 'https://www.instagram.com/johnallis0n'
  },
  {
    platform: 'Resume',
    icon: SvgFileText,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing'
  },
  {
    platform: 'LinkedIn',
    icon: SvgLinkedin,
    link: 'https://www.linkedin.com/in/johnallison-'
  },
  {
    platform: 'YouTube',
    icon: SvgYoutube,
    link: 'https://youtube.com/@JohnAllis0n'
  }
];
