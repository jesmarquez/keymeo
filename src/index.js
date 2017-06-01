import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import Base from './cliente/componentes/Base';

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider>
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
  </Router>
  </MuiThemeProvider>),
  document.getElementById('root')
);
