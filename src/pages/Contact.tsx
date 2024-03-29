import { socialData } from '../data/SocialData';
import BoxWithIcon from '../components/BoxWithIcon';
import '../scss/pages/Contact.scss';
const Contact = () => {
  return (
    <div data-testid="contact-component">
      <h1 className='no-select'>Contact me</h1>
      <div className='parent'>
        {socialData.map((social) => (
          <BoxWithIcon
            props={{
              text: social.platform,
              svg: social.icon,
              link: social.link,
              className: 'white',
            }}
            key={social.platform.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
