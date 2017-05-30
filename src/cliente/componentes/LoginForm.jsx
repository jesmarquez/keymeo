import React, { PropTypes } from 'react';
import { Input } from 'react-materialize';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <Input 
        name="username"
        type="email"
        label="email"
        value={user.username}
        onChange={onChange}
        s={2}
      />  
      <Input 
        name="password"
        type="password"
        label="password"
        value={user.password}
        onChange={onChange}
        s={2}
      />
      <Input
        type="submit"
        value="Login!"
        s={2}
      />
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm;
