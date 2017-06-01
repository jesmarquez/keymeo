import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Base = () => (
  <div>
    <Navbar brand='KeyMeo' right>
      <Link to="/login"><NavItem>Login</NavItem></Link>
    </Navbar>
  </div>
);

export default Base;
