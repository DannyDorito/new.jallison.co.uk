import SvgHeartWhite from '../svgs/HeartWhite';
import SvgHeartBlack from '../svgs/HeartBlack';
import '../scss/components/Footer.scss';

const Footer = ({ onClick, darkMode }: { onClick: () => void; darkMode: boolean }) => {
  return (
    <>
      <div className='footer no-select'>
        <p>
          Made with&nbsp;
          {darkMode ? <SvgHeartWhite onClick={onClick} /> : <SvgHeartBlack onClick={onClick} />}
          &nbsp;by John Allison &#0169; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
