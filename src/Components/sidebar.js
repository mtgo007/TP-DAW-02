import React, { Component } from 'react';

class Sidebar extends Component {

   constructor(props){
     super(props);
     this.state = {
         usuario:this.props.usuarioLogado,
         option: 1
     }
   }

   alteraAtivo = () => {
    const lis = document.getElementsByClassName("list-group-item");
    let index = this.state.option;
    for(let li of lis){
        li.className = "list-group-item list-group-item-action  text-center "
    }
    lis[index].className = "list-group-item list-group-item-action  text-center active";
   }

   handleState = (estado)=>{
    this.setState({option:estado}, function(){
        this.props.switchState(this.state.option)
        this.alteraAtivo()
    });
   }

  render() {
    return (
      <div  className="Sidebar" style={{height:'100vh'}}>
        <div className="container bg-success h-100">
            <h1 className="text-center text-light pt-2 mb-2">Bem-vindo {this.state.usuario.nome}!</h1>
            <ul className="list-group bg-success">
                <li className="list-group-item list-group-item-action  text-center active"
                onClick={()=>{this.handleState(0)}}
                >
                Dashboard</li>
                <li className="list-group-item list-group-item-action  text-center "
                onClick={()=>{this.handleState(1)}}
                >
                Perfil</li>
                <li className="list-group-item list-group-item-action  text-center "
                onClick={()=>{this.handleState(2)}}
                >
                Notificações</li>
                <li className="list-group-item list-group-item-action  text-center "
                onClick={()=>{this.handleState(3)}}
                >
                Sair</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;