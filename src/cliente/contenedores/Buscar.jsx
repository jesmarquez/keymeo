import React from 'react';
import {Input} from 'react-materialize';

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

export default Buscar
