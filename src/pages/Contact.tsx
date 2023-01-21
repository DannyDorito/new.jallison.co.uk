import { socialData } from '../types/SocialData';
import BoxWithIcon from '../components/BoxWithIcon';
import '../scss/pages/Contact.scss';

const Contact = () =>
{
  return (
    <>
      <div>
        <h1 className='no-select'>Contact me</h1>
        <div className="parent">
          {socialData.map( ( social ) => (
            <BoxWithIcon props={{ text: social.platform, src: social.icon, alt: social.platform, link: social.link }} key={social.platform.toLowerCase()} />
          ) )}
        </div>
      </div>
    </>
  );
};

export default Contact;
