import React ,{ Component } from 'react';

class DetailedItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantidade:this.props.item.quantidade
        }
        // console.log(this.props)
    }

    handleInputChange = (valor) => {
        if(this.props.item.quantidade >= valor){
            this.setState({quantidade:valor})
        }
    }

    handleComprar = () => {
      alert("Parabens você comprou")
    }

    render() {
      return (
        <div  className="DetailedItem pt-5">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title text-center">{this.props.item.nome}</h2>
                <div class="form-inline">
                  <div class="form-group mb-1">
                    <h5 className="pr-2">Quantidade: </h5>
                    <input type="number" lass="form-control mx-sm-3" value={this.state.quantidade} onChange={e => this.handleInputChange(e.target.value)}/>
                  </div>
                </div>
                  <h5 className="mb-2">Estação Fornecedora: {this.props.item.fornecedor}</h5>
                  <h5>Tipo de Material: {this.props.item.tipodeMaterial}</h5>
                </div>
                <div className="col-12 ">
                  <div className="container mb-2">
                    <div className="row justify-content-between">
                      <input onClick={() => this.props.anular(undefined)}     type="submit" value="Voltar" className="btn   align-self-start col-4  btn-secondary"/>
                      <input onClick={() => this.handleComprar()}    type="submit" value="Comprar" className="btn    align-self-end col-4  btn-success"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      );
    }
  }
  
  export default DetailedItem;
