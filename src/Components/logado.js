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
    return (
      <div  className="Logado" >
        <div  className="row no-gutters">
            <div  className="col-sm-2">
                <Sidebar changeState={this.props.changeState} switchState={this.switchState}  usuarioLogado={this.props.usuarioLogado} />
            </div>
            <div  className="col-sm-10 ">
                <div className="background bg-dark"></div>
                <Dashboard  user={this.props.usuarioLogado} state={this.state.atual}/>
            </div> 
        </div>
      </div>
    );
  }
}

export default Logado;