import Base from './cliente/componentes/Base';
import HomePage from './cliente/componentes/HomePage';
import LoginPage from './cliente/contenedores/LoginPage';

const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
};

export default routes;
