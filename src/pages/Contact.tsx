import { socialData } from '../types/SocialData';
import '../scss/Contact.scss';
import BoxWithIcon from '../components/BoxWithIcon';

const Contact = () =>
{
  return (
    <>
      <div>
        <h1 className='no-select'>Contact me</h1>
        <div className="parent">
          {socialData.map( ( social ) => (
            <BoxWithIcon props={{ className: "child", text: social.platform, src: social.icon, alt: social.platform, link: social.link }} key={social.platform} />
          ) )}
        </div>
      </div>
    </>
  );
};

export default Contact;
