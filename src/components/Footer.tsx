import '../scss/components/Footer.scss';
import blackheart from '../icons/heart-black.svg';
import whiteheart from '../icons/heart-white.svg';

const Footer = ( { onClick, darkMode }: any ) =>
{
  return (
    <>
      <div className='footer no-select'>
        <p>Made with<img onClick={onClick} className='pointer' src={darkMode ? whiteheart : blackheart}></img>by John Allison &#0169; {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
