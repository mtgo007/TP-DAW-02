import React, { Component } from 'react';
import FormAdd from "./formAdd";
import Items from './items';
import Notificacoes from './notificacoes';

class Dashboard extends Component {

  constructor(props){
      super(props);
      this.state = {
          atual : this.props.state,
          items:[
              {
                id:0,
                nome: "Plastico",
                quantidade:500,
                fornecedor: 'GreenPeace',
                tipodeMaterial:1
              },
              {
                id:1,
                nome: "Madeira",
                quantidade:500,
                fornecedor: 'GreenPeace',
                tipodeMaterial:1
            },
            {
                id:2,
                nome: "Papel",
                quantidade:500,
                fornecedor: 'GreenPeace',
                tipodeMaterial:1
            },
            {
                id:3,
                nome: "Alumínio",
                quantidade:500,
                fornecedor: 'GreenPeace',
                tipodeMaterial:1
            },
            {
                id:4,
                nome: "Organico",
                quantidade:500,
                fornecedor: 'GreenPeace',
                tipodeMaterial:1
            },
          ],
          search:''
      }
  }

  render() {
    if(this.props.state === 0){
        return (
            <div  className="Dashboard  h100 cinza"  >
                <Items token={this.props.user.token} items={this.state.items} />
            </div>
        );
    } else if(this.props.state === 1){
        return (
            <div  className="Dashboard  h100"  >
                <FormAdd btnText='Salvar Alterações' user={this.props.user}/>
            </div>
        );
    }
    else{
        return(
            <div  className="Dashboard  h10"  >
                <Notificacoes />
            </div>
        );
    }
  }
}

export default Dashboard;