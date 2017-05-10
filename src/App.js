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

function Login() {
  return(
    <div>
      <Input type="email" label="email" s={3}/>
      <Input type="password" label="password" s={3}/>)
    </div>
  );
}

function Buscar() {
  return <Input type="text" label="servidor" s={6}/>;
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state
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
          <Buscar />
        </Col>
      </Row>
      <Row>
        <Ficha server={SERVER}/>
      </Row>
    </Row>
    );
  }
}

export default App;
