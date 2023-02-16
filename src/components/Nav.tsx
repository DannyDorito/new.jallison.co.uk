import { NavLink } from 'react-router-dom';
import '../scss/components/Nav.scss';

const Nav = () =>
{
  return (
    <>
      {/* Adding a route, also add to RouterSetup.tsx and sitemap.xml */}
      <div className='nav'>
        <ul>
          <li>
            <NavLink end className={( navData ) => ( navData.isActive ? 'active' : 'not-active' )} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={( navData ) => ( navData.isActive ? 'active' : 'not-active' )} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={( navData ) => ( navData.isActive ? 'active' : 'not-active' )} to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={( navData ) => ( navData.isActive ? 'active' : 'not-active' )} to='/guestbook'>
              Guestbook
            </NavLink>
          </li>
          <li>
            <NavLink className={( navData ) => ( navData.isActive ? 'active' : 'not-active' )} to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={( navData ) => navData.isActive ? "active" : "not-active"} to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
