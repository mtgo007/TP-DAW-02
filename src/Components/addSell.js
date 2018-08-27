import React, { Component } from 'react';
import axios from 'axios';

let tipos = [<option></option>];

class AddSell extends Component {

  constructor(props){
    super(props);
    this.state={
      tipo:undefined,
      quantidade:0,
      preco:0
    }
  }

  componentWillMount(){
    for(let tipo of this.props.tipos){
      tipos.push((<option>{tipo}</option>))
    }
  }

  handleAdd=() =>{
    if(this.state.tipo && this.state.preco && this.state.quantidade){
      let index = this.props.tipos.indexOf(this.state.tipo);
      fetch('/api/v1/stationSells', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `bearer ${this.props.token}`
        },
        body: JSON.stringify({
          "price": parseInt(this.state.preco),
          "quantity": parseInt(this.state.quantidade),
          "type_id": parseInt(index+1),
          "station_id": (this.props.id)
        }),
      })
       .then(res => res.json())
       .then(res => alert("Adição feita com Sucesso"))
       .catch(e => console.log(e))
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
          <input value={this.state.preco} onChange={(event)=>this.setState({preco:event.target.value})} type="number" class="form-control"    placeholder="Preço"/>
        </div>
        <div className="form-group">
          <p className="text-center" >Quantidade</p>
          <input value={this.state.quantidade} onChange={(event)=>this.setState({quantidade:event.target.value})} type="number" class="form-control"    placeholder="Quantidade"/>
        </div>
        <button onClick={this.handleAdd} type="submit col-2" class="btn btn-success float-right">Add Anúncio</button>
      </div>
      </div>
    );
  }
}

export default AddSell;