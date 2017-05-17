import React, { Component } from 'react';
import {Button, Row, Col, Input, Collection, CollectionItem} from 'react-materialize';
import './App.css';

function getServers(n) {
  /* while (n-- > 0) {
    servers.push(SERVER);
  } */

  let servers = [
    {
      id: '1',
      name: 'augusta',
      ipinterna: '175.16.3.6', 
      ipexterna: '181.118.150.145',
      dominio: 'augusta.nobit.edu.co',
    },
    {
      id: '2',
      name: 'api',
      ipinterna: '165.18.3.6', 
      ipexterna: '171.118.150.145',
      dominio: 'api.nobit.edu.co',
    },
    {
      id: '3',
      name: 'clientes',
      ipinterna: '175.16.3.6', 
      ipexterna: '181.118.150.145',
      dominio: 'clientes.nobit.edu.co',
    },
    {
      id: '4',
      name: 'database',
      ipinterna: '165.18.3.6', 
      ipexterna: '171.118.150.145',
      dominio: 'database.nobit.edu.co',
    }
  ];

  return servers;
}

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

class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiltroInputChange = this.handleFiltroInputChange.bind(this);
  }

  handleFiltroInputChange(e) {
    this.props.onFiltroServidor(e.target.value)
  }

  render() {
    return (
      <Input 
        type="text" 
        label="servidor"
        value={this.props.filtroServidor}
        onChange={this.handleFiltroInputChange}
        s={6}/>
    );
  }
}

class ListaServidores extends React.Component {
  render() {
    var rows = [];
    if (this.props.filtroServidor.length === 0 ) {
      this.props.servers.forEach((server) => {
        rows.push(<CollectionItem key={server.id} href='#'>{server.name}</CollectionItem>);
      });
    } else{
      this.props.servers.forEach((server) => {
        if (server.name.indexOf(this.props.filtroServidor) === -1) {
          return;
        }
        rows.push(<CollectionItem key={server.id} href='#'>{server.name}</CollectionItem>);
      });
    }  
    return (
      <Collection>{rows}</Collection>
   );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.servidores = getServers(4);
    this.state = {
      filtroServidor: ''
    };

    this.handleFiltroInput = this.handleFiltroInput.bind(this);
  }

  handleFiltroInput(filtroTexto) {
    this.setState({
      filtroServidor: filtroTexto
    });
  }

  render() {
    return (
    <Row>
      <Row>
          <Col s={12} offset={"s6"} className='login'>
            <LoginForm />
          </Col>
      </Row>
      <Row>
        <Col s={12} className='buscar'>
          <Buscar 
            filtroServidor={this.state.filtroServidor}
            onFiltroServidor={this.handleFiltroInput}
          />
        </Col>
      </Row>
      <Row>
        <ListaServidores
          servers={this.servidores} 
          filtroServidor={this.state.filtroServidor}
        />
      </Row>
    </Row>
    );
  }
}

export default App;
