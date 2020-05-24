import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { navLinks } from './NavLinks';
import { AdminNavLinks } from './AdminNavLinks';
import { UserContext } from '../../contexts/UserContext';
import styled from 'styled-components';

const Navigation = () => {
  const user = useContext(UserContext);

  return (
    <Navbar>
      <ul>
        {user
          ? AdminNavLinks.map((link, index) => (
              <NavLink key={link.text} to={link.path}>
                <li key={link.path + index}>
                  {link.text}
                  {link.icon}
                </li>
              </NavLink>
            ))
          : navLinks.map((link, index) => (
              <NavLink key={link.text} to={link.path}>
                <li key={link.path + index}>
                  {link.text}
                  {link.icon}
                </li>
              </NavLink>
            ))}
      </ul>
    </Navbar>
  );
};

export default withRouter(Navigation);

let Navbar = styled.nav`
  width: 100%;
  height: 3em;
  background-color: green;
  margin: 0 auto;
  ul {
    margin: 0;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    height: 100%;
    padding-inline-start: 0;
  }
  a {
    text-decoration: none;
    margin: auto 0;
  }
  li {
    color: white;
  }
`;
