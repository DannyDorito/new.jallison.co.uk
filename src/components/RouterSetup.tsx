import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '../helpers/UseLocalStorage';
import { preferDarkMode } from '../helpers/PreferDarkMode';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Nav from './Nav';
import NotFound from './NotFound';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Footer from './Footer';
import About from '../pages/About';
import Guestbook from '../pages/Guestbook';
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
        <Nav />
        <Fragment>
          <Routes>
            {/* Adding a route, also add to Nav.tsx and sitemap.xml */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/guestbook' element={<Guestbook />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Fragment>
        <Footer onClick={toggleDarkMode} darkMode={darkMode} />
      </Router>
    </div>
  );
};

export default RouterSetup;
