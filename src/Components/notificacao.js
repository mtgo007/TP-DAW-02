import React, { Component } from 'react';

class Notificacao extends Component {

  render() {
    return (
      <div  className="Notificacao mt-5 container">
        <div class="card ">
          <h5 class="card-header text-center">Enterga</h5>
          <div class="card-body">
            <h5 class="card-title">Enterga do Material: Plastico</h5>
            <p class="card-text">A entrega de 25KG de plastico ja foi despachada</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notificacao;