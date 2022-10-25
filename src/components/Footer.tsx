import { useState } from 'react';
import '../scss/Footer.scss';

const Footer = () => {
  const [message] = useState('Made with <3 by John Allison');
  // const [ isDarkMode, setDarkMode ] = useState(false);
  return (
    <>
      <p className="footer">{message}</p>
      {/* <button type="button" onClick={() => setDarkMode(!isDarkMode)}>{isDarkMode ? "darkmode" : "lightmode"}</button> */}
    </>
  );
};

export default Footer;
