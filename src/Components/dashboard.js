import React, { Component } from 'react';
import EditUser from "./editUser";
import Items from './items';
import Notificacoes from './notificacoes';
import AddSell from './addSell';

class Dashboard extends Component {

  constructor(props){
      super(props);
      this.state = {
          atual : this.props.state,
          search:'',
          tipos:[]
      }
  }

  setTipos = (tipos)=>{
    this.setState({tipos:tipos});
  }

  render() {
    if(this.props.state === 0){
        return (
            <div  className="Dashboard  h100"  >
                <Items token={this.props.user.token} items={this.state.items} tipo={this.props.user.tipoUsuario} setTipos={this.setTipos} id={this.props.user.id}  tipos={this.state.tipos}/>
            </div>
        );
    } else if(this.props.state === 1){
        return (
            <div  className="Dashboard  h100"  >
                <AddSell token={this.props.user.token} id={this.props.user.id} tipos={this.state.tipos}/>
            </div>
        );
    }
    else if(this.props.state === 2){
        return(
            <div  className="Dashboard  h10"  >
                <Notificacoes />
            </div>
        );
    } else{
        return(
            <div  className="Dashboard  h100"  >
                <EditUser btnText='Salvar Alterações' user={this.props.user}/>
            </div>
        );
    }
  }
}

export default Dashboard;