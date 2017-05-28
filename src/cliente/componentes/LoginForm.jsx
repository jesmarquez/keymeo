import React from 'react';
import {Input} from 'react-materialize';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    alert('Solicitud de acceso!');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input 
            name="username"
            type="email"
            label="email"
            value={this.state.username}
            onChange={this.handleInputChange}
            s={2}
          />  
          <Input 
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleInputChange}
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
  }
}

export default LoginForm;
