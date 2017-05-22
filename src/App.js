import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import './App.css';
import LoginForm from './LoginForm';
import Buscar from './Buscar';
import ListaServidores from './ListaServidores';

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
