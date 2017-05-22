import React from 'react';
import {Collection, CollectionItem} from 'react-materialize';

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

export default ListaServidores
