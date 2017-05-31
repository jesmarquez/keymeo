import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './cliente/contenedores/LoginPage';
import HomePage from './cliente/componentes/HomePage';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  </Router>),
  document.getElementById('root')
);
