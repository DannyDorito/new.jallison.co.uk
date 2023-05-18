import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { preferDarkMode } from '../helpers/PreferDarkMode';
import Wrapper from '../pages/Wrapper';
import NotFound from './NotFound';
import '../scss/components/RouterSetup.scss';

const RouterSetup = () =>
{
  let [ darkMode, setDarkMode ] = useLocalStorage( "darkMode", preferDarkMode() );

  function toggleDarkMode ()
  {
    setDarkMode( !darkMode );
  }

  return (
    <div className={darkMode ? 'pallet-dark' : 'pallet-light'}>
      <Router>
        <Fragment>
          <Routes>
            {/* Adding a route, also add to Nav.tsx and sitemap.xml */}
            <Route path='/' element={<Wrapper />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default RouterSetup;
