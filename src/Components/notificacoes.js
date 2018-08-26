import React, { Component } from 'react';
import Notificacao from './notificacao'

class Notificacoes extends Component {

  render() {
    let output = [];
    for(let i = 0;i<10;i++){
        output.push(<Notificacao />);
    }
    
    return (
      <div  className="Notificacoes">
        <h2 className="text-center mt-2 text-black">Notificações</h2>
        {output}
      </div>
    );
  }
}

export default Notificacoes;