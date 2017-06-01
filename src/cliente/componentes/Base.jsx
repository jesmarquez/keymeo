import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Base = () => (
  <div>
    <Navbar brand='KeyMeo' right>
      <NavItem href='#'>Login</NavItem>
      <NavItem href='#'>Components</NavItem>
    </Navbar>
  </div>
);

export default Base;
