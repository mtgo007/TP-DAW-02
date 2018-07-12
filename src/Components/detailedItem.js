import React ,{ Component } from 'react';

class DetailedItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantidade:this.props.item.quantidade
        }
        console.log(this.props)
    }

    handleInputChange = (valor) => {
        if(this.props.item.quantidade >= valor){
            this.setState({quantidade:valor})
        }
    }

    render() {
      return (
        <div  className="DetailedItem mt-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">{this.props.item.nome}</h5>
                <div class="form-inline">
                  <div class="form-group mb-3">
                    <label className="pr-2">Quantidade: </label>
                    <input type="number" lass="form-control mx-sm-3" value={this.state.quantidade} onChange={e => this.handleInputChange(e.target.value)}/>
                  </div>
                </div>
                  <p>Estação Fornecedora: {this.props.item.fornecedor}</p>
                  <p>Tipo de Material: {this.props.item.tipodeMaterial}</p>
                </div>
                <button className="btn btn-secondary" onClick={this.props.anular()}>Voltar</button>
              </div>
            </div>
      );
    }
  }
  
  export default DetailedItem;
