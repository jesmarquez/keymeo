import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes'

ReactDOM.render((
  <Router>
    <div>
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
