import { socialData } from '../types/SocialData';
import '../scss/Contact.scss';

const Contact = () => {
  return (
    <>
      <h1 className='no-select'>Contact me!</h1>
      {socialData.map((social) => (
        <a href={social.link} key={social.platform}>
          {social.platform}
        </a>
      ))}
    </>
  );
};

export default Contact;
