import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container">
    <Card>
      <CardHeader
        title="Gestione claves"
        subtitle="Servidores"
        actAsExpander={true}
        showExpandableButton={false}
      />
      <CardActions>
        <Link to="/login"><FlatButton label="Login" /></Link>
        <FlatButton label="Signup" />
      </CardActions>
    </Card>
  </div>
);

export default HomePage;
