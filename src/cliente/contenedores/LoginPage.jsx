import React from 'react';
import LoginForm from '../componentes/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        username: '',
        password: ''
      }
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
      <LoginForm
        onSubmit={this.handleSubmit}
        onChange={this.handleInputChange}
        errors={this.errors}
        user={this.state.user}
      />
    );
  }
}

export default LoginPage;
