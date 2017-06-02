import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form onSubmit={onSubmit}>
      <h4 className="card-heading">Login</h4>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="username"
          name="username"
          type="email"
          onChange={onChange}
        />  
      </div>
      
      <div className="field-line">
        <TextField
          floatingLabelText="password"
          name="password"
          type="password"
          onChange={onChange}
        />
      </div>

      <div className="button-line">
        <RaisedButton
          type="submit"
          label="Login!"
          primary
        />
      </div>
    </form>
  </Card>
);

export default LoginForm;
