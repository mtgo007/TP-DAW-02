import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {

   constructor(props){
     super(props);
     this.state = {
         usuario:this.props.usuarioLogado,
         option: 1
     }
    //  console.log(this.props.usuarioLogado)
   }

   sair = () =>{
       console.log(`bearer ${this.state.usuario.token}`);
       axios.post("/api/v1/user/logout",{},{
           headers:{
                "Content-Type": "application/json",
               "Authorization": `bearer ${this.state.usuario.token}`
           }
       })
        .then(res => console.log(res.status))
        .catch(e => console.log(e))
       this.props.changeState(0, undefined);
    
   }

   alteraAtivo = () => {
    const lis = document.getElementsByClassName("list-group-item");
    let index = this.state.option;
    for(let li of lis){
        li.className = "list-group-item list-group-item-action  "
    }
    lis[index].className = "list-group-item list-group-item-action  active";
   }

   handleState = (estado)=>{
    this.setState({option:estado}, function(){
        this.props.switchState(this.state.option)
        this.alteraAtivo()
    });
   }

  render() {
    return (
      <div  className="Sidebar sidenav " style={{height:'100vh'}}>
        <div className="container-fluid bg-light h-100 bgdashboard">
            <h1 className="text-center pt-2 mb-5 text-white ">Bem-vindo {this.state.usuario.nome}!</h1>
            <ul className="list-group bg-success">
                <li className="list-group-item list-group-item-action   active"
                onClick={()=>{this.handleState(0)}}
                >
                <i class="fas mr-1 fa-align-justify"></i>
                Dashboard</li>
                <li className="list-group-item list-group-item-action   "
                onClick={()=>{this.handleState(1)}}
                >
                <i class="fas mr-1 fa-user-alt"></i>
                Perfil</li>
                <li className="list-group-item list-group-item-action   "
                onClick={()=>{this.handleState(2)}}
                >
                <i class="fas fa-info-circle mr-1"></i>
                Notificações</li>
            </ul>
            <div className="d-flex align-items-end flex-column">
                <ul className="list-group mb-3 fixed-bottom col-3">
                    <li className="list-group-item list-group-item-action "
                    onClick={()=>{this.sair()}}
                    >
                    <i class="fas fa-sign-out-alt mr-1"></i>
                    Sair</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;