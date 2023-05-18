import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts'
import Wrapper from '../pages/Wrapper';
import NotFound from './NotFound';
import '../scss/components/RouterSetup.scss';

const RouterSetup = () =>
{
  const { isDarkMode, toggle, enable, disable } = useDarkMode();


  return (
    <div className={isDarkMode ? 'pallet-dark' : 'pallet-light'}>
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
