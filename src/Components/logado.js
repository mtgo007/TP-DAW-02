import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Dashboard from './dashboard';


class Logado extends Component {

  constructor(props){
    super(props);
    this.state = {
        atual:0
    }
  }

  switchState = (estado) => {
    this.setState({atual:estado});
  }

  render() {
      console.log('this.props.usuarioLogado')
    return (
      <div  className="Logado" >
        <div className="row ">
            <div className="col-3">
                <Sidebar switchState={this.switchState}  usuarioLogado={this.props.usuarioLogado} />
            </div>
            <div className="col-9">
                <Dashboard user={this.props.usuarioLogado} state={this.state.atual}/>
            </div> 
        </div>
      </div>
    );
  }
}

export default Logado;