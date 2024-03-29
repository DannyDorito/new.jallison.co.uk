import SvgHeartWhite from '../svgs/HeartWhite';
import '../scss/components/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer no-select'>
        <p>
          Made with&nbsp;
          <SvgHeartWhite data-testid="heart-icon"/>
          &nbsp;by John Allison &#0169; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
