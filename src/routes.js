import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './cliente/componentes/HomePage';
import LoginPage from './cliente/contenedores/LoginPage';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  }
];

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
    )}/>
);

export { routes, RouteWithSubRoutes };
