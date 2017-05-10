import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, Icon, Row, Col, Input, Collection, CollectionItem} from 'react-materialize';
import './App.css';

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

class App extends Component {
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
        <Collection header='Augusta'>
          <CollectionItem>root:xxxxx</CollectionItem>
          <CollectionItem>jamarquez:xxxx</CollectionItem>
          <CollectionItem>mysql:xxxxx</CollectionItem>
          <CollectionItem>carestrepo:xxxx</CollectionItem>
        </Collection>
      </Row>
    </Row>
    );
  }
}

export default App;
