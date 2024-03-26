import { useEffect } from 'react';
import '../scss/pages/Wrapper.scss';

const Redirect = ({ link, platform }: { link: string; platform: string }) => {
  useEffect(() => {
    window.location.href = link;
  });

  return (
    <section className='dark'>
      <h2>Redirecting to {platform}...</h2>
    </section>
  );
};

export default Redirect;
