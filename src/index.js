import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import Base from './cliente/componentes/Base';

ReactDOM.render((
  <Router>
    <div>
      <Base/>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </div>
  </Router>),
  document.getElementById('root')
);
