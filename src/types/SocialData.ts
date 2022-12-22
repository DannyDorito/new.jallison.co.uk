import twitter from '../icons/twitter.svg'
import mail from '../icons/mail.svg';
import github from '../icons/github.svg';
import instagram from '../icons/instagram.svg';
import filetext from '../icons/file-text.svg';
import linkedin from '../icons/linkedin.svg';
import youtube from '../icons/youtube.svg';

export interface SocialData {
  platform: string;
  icon: string;
  link: string;
}

export const socialData: SocialData[] = [
  {
    platform: 'Twitter',
    icon: twitter,
    link: 'https://twitter.com/JohnAllis0n'
  },
  {
    platform: 'Email',
    icon: mail,
    link: 'mailto:contact@jallison.co.uk'
  },
  {
    platform: 'GitHub',
    icon: github,
    link: 'https://github.com/DannyDorito'
  },
  {
    platform: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/johnallis0n'
  },
  {
    platform: 'Resume',
    icon: filetext,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing'
  },
  {
    platform: 'LinkedIn',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/johnallison-'
  },
  {
    platform: 'YouTube',
    icon: youtube,
    link: 'https://youtube.com/@JohnAllis0n'
  }
];
