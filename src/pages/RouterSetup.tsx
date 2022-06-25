import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';
import './scss/RouterSetup.scss';

const RouterSetup = () =>
{
  return (
    <Router>
      <Nav />
      <Fragment>
        <Routes>
          {/* Adding a route, also add to Nav.tsx */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default RouterSetup;
