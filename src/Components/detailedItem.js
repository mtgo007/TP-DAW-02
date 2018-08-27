import React ,{ Component } from 'react';

let btns = undefined;
class DetailedItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantidade:this.props.item.quantidade,
            message:"",
            erro:""
        }
        if(this.props.userTipo === 'company'){
          btns = (<div className="row justify-content-between">
          <input onClick={() => this.props.anular(undefined)}     type="submit" value="Voltar" className="btn   align-self-start col-4  btn-secondary"/>
          <input onClick={() => this.handleComprar()}    type="submit" value="Comprar" className="btn    align-self-end col-4  btn-success"/>
        </div>)
        } else{
          btns = (<div className="row justify-content-between">
            <input onClick={() => this.props.anular(undefined)}     type="submit" value="Voltar" className="btn   align-self-start col-4  btn-secondary"/>
            </div>);
        }
        // console.log(this.props)
    }

    handleInputChange = (valor) => {
        if(this.props.item.quantidade >= valor){
            this.setState({quantidade:valor})
        }
    }

    handleComprar = () => {
      console.log(`bearer ${this.props.token}`)
      console.log({'userId':this.props.userId,'itemid':this.props.item.id})
      this.setState({message:"Realizando Compra"})
      fetch('/api/v1/companyBuys', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `bearer ${this.props.token}`
        },
        body: JSON.stringify({
          "company_id": parseInt(this.props.userId),
          "stationSell_id": parseInt(this.props.item.id)
        }),
      })
       .then(res => res.json())
       .then(res => {
         alert("Compra Realizada Com Sucesso")
         this.setState({message:""})
         this.props.navigate(undefined, this.props.item.id);
       })
       .catch(e => {console.log(e)
          this.setState({message:""})
          this.setState({erro:"Compra Não realizada"})
        })
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
                    <input disabled type="number" lass="form-control mx-sm-3" value={this.state.quantidade} onChange={e => this.handleInputChange(e.target.value)}/>
                    <small className="ml-1">Kg</small>
                  </div>
                </div>
                  <h5>Tipo de Material: {this.props.item.tipodeMaterial}</h5>
                  <h5>Preço: {`R$${this.props.item.preco}`}</h5>
                  <p className="text-center text-warning">{this.state.message}</p>
                  <p className="text-center text-danger">{this.state.erro}</p>
                </div>
                <div className="col-12 ">
                  <div className="container mb-2">
                    {btns}
                  </div>
                </div>
              </div>
            </div>
      );
    }
  }
  
  export default DetailedItem;
