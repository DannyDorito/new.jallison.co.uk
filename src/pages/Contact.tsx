import { socialData } from '../types/SocialData';
import '../scss/Contact.scss';

const Contact = () =>
{
  return (
    <>
      <div>
        <h1 className='no-select'>Contact me</h1>
        {socialData.map( ( social ) => (
          <div key={social.platform}>
            <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.platform}>
              {social.platform}
            </a>
            {/* <img src={social.icon} alt={social.platform} className="icon"></img> */}
          </div>
        ) )}
      </div>
    </>
  );
};

export default Contact;
