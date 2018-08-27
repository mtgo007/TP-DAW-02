import React, { Component } from 'react';
import axios from 'axios';

let tipos = [<option></option>];

class AddSell extends Component {

  constructor(props){
    super(props);
    this.state={
      tipo:undefined,
      quantidade:0,
      preco:0,
      mensage:"",
      erro:""
    }
  }

  componentWillMount(){
    for(let tipo of this.props.tipos){
      tipos.push((<option>{tipo}</option>))
    }
  }

  handleAdd=() =>{
    if(this.state.tipo && this.state.preco && this.state.quantidade){
      this.setState({mensage:"Adicionando Anúncio"});
      let index = this.props.tipos.indexOf(this.state.tipo);
      fetch('/api/v1/stationSells', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `bearer ${this.props.token}`
        },
        body: JSON.stringify({
          "price": parseFloat(this.state.preco),
          "quantity": parseFloat(this.state.quantidade),
          "type_id": parseInt(index+1),
          "station_id": (this.props.id)
        }),
      })
       .then(res => res.json())
       .then(res => {
        this.state.preco = 0;
        this.state.quantidade = 0;
         this.setState({mensage:""});
         alert("Adição feita com Sucesso")
       })
       .catch(e => {
        this.setState({mensage:""});
        this.setState({erro:"Anúncio não adicionado"});
        setTimeout(()=>{erro:""},2000);
         console.log(e)
       })
    } else {
      let atual = this;
      this.setState({erro:"Campos Nulos"});
      setTimeout(()=>atual.setState({erro:""}),2000);
    }
  }

  render() {
    return (
      <div className="AddSell">
        <div className="EditUser container jumbotron mt-5 w-50 mx-auto">
        <div className="form-group ">
          <p className="text-center" >Tipo</p>
          <select value={this.state.tipo} onChange={(event)=>this.setState({tipo:event.target.value})} class="form-control" id="exampleFormControlSelect1">
            {tipos}
          </select>
        </div>
        <div className="form-group">
          <p className="text-center" >Preço</p>
          <input value={this.state.preco} onChange={(event)=>{
            if(event.target.value>-1){
            this.setState({preco:event.target.value})}
            }} type="number" class="form-control"    placeholder="Preço"/>
        </div>
        <div className="form-group">
          <p className="text-center" >Quantidade Kg</p>
          <input value={this.state.quantidade} onChange={(event)=>{
            if(event.target.value>-1){
            this.setState({quantidade:event.target.value})}
            }} type="number" class="form-control"    placeholder="Quantidade em Kg"/>
        </div>
        <p className="text-center text-info">{this.state.mensage}</p>
        <p className="text-center text-danger">{this.state.erro}</p>
        <button onClick={this.handleAdd} type="submit col-2" class="btn btn-success float-right">Add Anúncio</button>
      </div>
      </div>
    );
  }
}

export default AddSell;