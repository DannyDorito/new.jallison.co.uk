import '../scss/components/Footer.scss';
import blackheart from '../icons/heart-black.svg';
import whiteheart from '../icons/heart-white.svg';

const Footer = ( { onClick, darkMode }: any ) =>
{
  return (
    <>
      <div className='footer no-select'>
        <p>Made with</p>
        {darkMode ? <img onClick={onClick} className='pointer' src={whiteheart}></img> : <img onClick={onClick} className='pointer' src={blackheart}></img> }
        <p>by John Allison &#0169; {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
