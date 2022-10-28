import '../scss/Footer.scss';

const Footer = ({ onClick, darkMode }: any) => {
  return (
    <>
      <div className='footer no-select'>
        <p>Made with</p>
        {darkMode ? (
          <span onClick={onClick} aria-label='Black Heart' role='img' className='pointer'>&nbsp;🖤&nbsp;</span>
        ) : (
          <span onClick={onClick} aria-label='White Heart' role='img' className='pointer'>&nbsp;🤍&nbsp;</span>
        )}
        <p>by John Allison</p>
      </div>
    </>
  );
};

export default Footer;
