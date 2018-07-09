import React, { Component } from 'react';
import Login from './Components/login'
import Add from './Components/add'
import Logado from './Components/logado';

class App extends Component {

  constructor(){
    super();
    this.state = {
      atual: 2,
      usuarioLogado:{
        nome:"Mathias",
        email:"mtgo@mtgo.com",
        endereco: "Rua da Bahia",
        telefone:"3194799570",
        tipoUsuario:"Comprador"
      }
    }
  }

  changeState(estado, usuario){
    console.log(estado)
    this.setState({atual:estado});
    this.setState({usuarioLogado:usuario});
  }

  render() {
    if(this.state.atual==0){
      return (
        <div className="App">
          <Login changeState={this.changeState.bind(this)} />
        </div>
      );
    } else if(this.state.atual==1){
      return(
        <div className="App">
          <Add changeState={this.changeState.bind(this)} />
        </div>
      );
    } else if(this.state.atual==2){
      return(
        <div className="App">
          <Logado usuarioLogado={this.state.usuarioLogado} changeState={this.changeState.bind(this)} />
        </div>
      );
    }
  }
}

export default App;
