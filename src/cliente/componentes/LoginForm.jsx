import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form onSubmit={onSubmit}>
      <div className="field-name">
        <TextField 
          name="username"
          type="email"
          label="email"
          value={user.username}
          onChange={onChange}
        />  
      </div>
      
      <div className="field-name">
        <TextField
          name="password"
          type="password"
          label="password"
          value={user.password}
          onChange={onChange}
        />
      </div>

      <div className="button-line">
        <RaisedButton
          type="submit"
          value="Login!"
        />
      </div>
    </form>
  </Card>
);

export default LoginForm;
