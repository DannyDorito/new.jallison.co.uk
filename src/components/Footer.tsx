import SvgHeartWhite from '../svgs/HeartWhite';
import SvgHeartBlack from '../svgs/HeartBlack';
import '../scss/components/Footer.scss';

const Footer = ( { onClick, darkMode }: any ) =>
{
  return (
    <>
      <div className='footer no-select'>
        <p>Made with{darkMode ? <SvgHeartWhite onClick={onClick} /> : <SvgHeartBlack onClick={onClick} />}by John Allison &#0169; {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
