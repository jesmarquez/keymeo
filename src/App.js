import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import './App.css';
import LoginForm from './LoginForm';
import Buscar from './Buscar';
import ListaServidores from './ListaServidores';
import Cliente from './Client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtroServidor: '',
      servidores: [],
    };
    
    this.handleFiltroInput = this.handleFiltroInput.bind(this);
  }

  componentWillMount() {
    console.log('it will mount!');
  }

  componentDidMount() {
    console.log('it did mount!');
    
    Cliente.listaServidores((servers) => {
      this.setState({servidores: servers});
    });
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
          servers={this.state.servidores} 
          filtroServidor={this.state.filtroServidor}
        />
      </Row>
    </Row>
    );
  }
}

export default App;
