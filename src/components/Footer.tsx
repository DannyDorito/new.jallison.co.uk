import { useState } from 'react';
import '../scss/Footer.scss';

const Footer = ({ onClick, darkMode }: any) => {
  const [message] = useState('Made with <3 by John Allison');

  return (
    <>
      <div className="footer no-select">
        <p>{message}</p>
        {darkMode ? (
          <span
            onClick={onClick}
            aria-label="Full Moon"
            role="img"
            className="pointer"
          >
            🌕
          </span>
        ) : (
          <span
            onClick={onClick}
            aria-label="New Moon"
            role="img"
            className="pointer"
          >
            🌑
          </span>
        )}
      </div>
    </>
  );
};

export default Footer;
