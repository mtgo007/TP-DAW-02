import React, { Component } from 'react';


class Item extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div  className="Item mt-5 col-3 ">
        <div className="card">
            <h3 className="text-center pt-1">{this.props.item.nome}</h3>
            <div className="container">
                <p>Quantidade: {this.props.item.quantidade}Kg</p>
                <p>Estação Fornecedora: {this.props.item.fornecedor}</p>
                <p>Tipo de Material: {this.props.item.tipodeMaterial}</p>
            </div>
            <input type="button" onClick={(e) => this.props.click(this.props.item)} class="btn btn-primary" className="btn w-75 mx-auto mb-2 btn-outline-success" type="submit" value="Comprar"/>
        </div>
      </div>
    );
  }
}

export default Item;