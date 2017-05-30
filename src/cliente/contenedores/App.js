import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import './App.css';
import LoginPage from './LoginPage';
import HomePage from '../componentes/HomePage';
import ListaServidores from '../componentes/ListaServidores';
import Cliente from '../../Client';

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
            <LoginPage />
          </Col>
      </Row>
      <Row>
        <Col s={12} className='buscar'>
          <HomePage /> 
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
