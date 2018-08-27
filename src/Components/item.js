import React, { Component } from 'react';

let tipo;
class Item extends Component {

  constructor(props){
    super(props);
    let link = this.props.tipo;
    let indice = parseInt(link.replace('/api/v1/types/',""))-1
    tipo = this.props.tipos[indice];
    this.state={
      tipo:tipo
    }
    console.log(link)
  }

  componentWillMount(){
    // let link = this.props.item.tipo;
    // let indice = link.replace('/api/v1/types/',"")
    // tipo = this.props.tipos[indice];
    // console.log(tipo)
  }

  componentDidMount(){
    // let link = this.props.item.tipo;
    // let indice = link.replace('/api/v1/types/',"")
    // tipo = this.props.tipos[indice];
    // console.log(tipo)
  }

  render() {
    return (
      <div  className="Item mt-5 col-3 ">
        <div className="card">
            <h3 className="text-center pt-1">{this.props.item.nome}</h3>
            <div className="container">
                <p>Tipo de Material: {this.state.tipo}</p>
                <p>Quantidade: {this.props.item.quantity}Kg</p>
                <p>Preço: R${this.props.item.price}</p>
            </div>
            <input type="button" onClick={(e) => this.props.click({quantidade:this.props.item.quantity,tipodeMaterial:tipo,id:this.props.item.id,preco:this.props.item.price})} class="btn btn-primary" className={`btn w-75 mx-auto mb-2 ${this.props.action=="Visualizar"?"btn-outline-info":"btn-outline-success"}`} type="submit" value={this.props.action}/>
        </div>
      </div>
    );
  }
}

export default Item;