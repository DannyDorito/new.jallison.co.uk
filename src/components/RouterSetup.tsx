import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from '../pages/Wrapper';
import NotFound from './NotFound';
import '../scss/components/RouterSetup.scss';
import { socialData } from '../data/SocialData';
import Redirect from '../pages/Redirect';

const RouterSetup = () =>
{
  const redirects = socialData.filter( ( sd ) => sd.redirect !== undefined );
  return (
    <div>
      <Router>
        <Fragment>
          <Routes>
            {/* Adding a route, also add to Nav.tsx and sitemap.xml */}
            <Route path='/' element={<Wrapper />} />
            {redirects.map( ( redirect ) => (
              <Route
                path={redirect.redirect}
                element={<Redirect link={redirect.link} platform={redirect.platform} />}
                key={redirect.platform}
              />
            ) )}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default RouterSetup;
