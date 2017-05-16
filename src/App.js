import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, Icon, Row, Col, Input, Collection, CollectionItem} from 'react-materialize';
import './App.css';

var  SERVER = {
  name: 'augusta',
  ipinterna: '175.16.3.6', 
  ipexterna: '181.118.150.145',
  dominio: 'augusta.uao.edu.co',
};

function getServers(n) {
  /* while (n-- > 0) {
    servers.push(SERVER);
  } */

  let servers = [
    {
      name: 'augusta',
      ipinterna: '175.16.3.6', 
      ipexterna: '181.118.150.145',
      dominio: 'augusta.nobit.edu.co',
    },
    {
      name: 'api',
      ipinterna: '165.18.3.6', 
      ipexterna: '171.118.150.145',
      dominio: 'api.nobit.edu.co',
    },
    {
      name: 'clientes',
      ipinterna: '175.16.3.6', 
      ipexterna: '181.118.150.145',
      dominio: 'clientes.nobit.edu.co',
    },
    {
      name: 'database',
      ipinterna: '165.18.3.6', 
      ipexterna: '171.118.150.145',
      dominio: 'database.nobit.edu.co',
    }
  ];

  return servers;
}

function Login() {
  return(
    <div>
      <Input type="email" label="email" s={3}/>
      <Input type="password" label="password" s={3}/>)
    </div>
  );
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

function Ficha(props) {
  var server = props.server;

  return(
    <Collection header= {server.name}>
      <CollectionItem>ip interna:{server.ipinterna}</CollectionItem>
      <CollectionItem>ip externa:{server.ipexterna}</CollectionItem>
      <CollectionItem>dominio:{server.dominio}</CollectionItem>
    </Collection>
  );
}

class ListaServidores extends React.Component {
  render() {
    var rows = [];
    if (this.props.filtroServidor.length == 0 ) {
      this.props.servers.forEach((server) => {
        rows.push(<CollectionItem href='#'>{server.name}</CollectionItem>);
      });
    } else{
      this.props.servers.forEach((server) => {
        if (server.name.indexOf(this.props.filtroServidor) === -1) {
          return;
        }
        rows.push(<CollectionItem href='#'>{server.name}</CollectionItem>);
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
            <Login />
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
