import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Nav from '../components/Nav';
import NotFound from './NotFound';
import Projects from './Projects';
import Resume from './Resume';
import Footer from '../components/Footer';
import '../scss/_Main.scss';
import '../scss/RouterSetup.scss';

const RouterSetup = () =>
{
  let [ darkMode, setDarkMode ] = useState( false );

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
            {/* Adding a route, also add to Nav.tsx */}
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
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
