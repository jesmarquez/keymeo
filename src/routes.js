import HomePage from './cliente/componentes/HomePage';
import LoginPage from './cliente/contenedores/LoginPage';

const routes = [
  { path: '/',
    exact: true,
    component: HomePage
  },
  { path: '/login',
    component: LoginPage
  }
];

export default routes;
