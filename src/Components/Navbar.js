import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className={classes.header}>
      <h1>Math Magicians</h1>
      <ul className={classes.dflex}>
        {links.map((link) => (
          <li key={link.id} className={classes.links}>
            <NavLink
              exact
              to={link.path}
              activeClassName={classes.activeLink}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
