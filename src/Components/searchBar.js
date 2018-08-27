import React, { Component } from 'react';

let options = [<option></option>];
let tipos = [];

class SerachBar extends Component {

    constructor(){
        super();
        this.state={
            search:0,
            tipos:[]
        }
    }

    componentWillMount(){
      let atual = this;
      console.log(`Bearer ${this.props.token}`);
      fetch('/api/v1/types', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${this.props.token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        tipos = [];
        for(let tipo of res.data){
          tipos.push(tipo.type);
          options.push((<option>{tipo.type}</option>));
        }
        atual.setState({tipos:tipos});
        this.props.setTipos(tipos);
        this.handlesearch();
      })
      .catch(e => console.log(e))
    }

    handlesearch = (e) => {
      console.log(this.state.search)
      // let query = e.target.value;
      console.log(e);
        this.props.search(this.state.tipos.indexOf(e));
        // this.props.handleTipos(tipos);
    }

  render() {
    return (
      <div  className="SerachBar w-50 mx-auto mt-5">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fas fa-search"></i></span>
          </div>
          <select onChange={(event)=>this.handlesearch(event.target.value)} class="form-control" id="exampleFormControlSelect1">
            {options}
          </select>
        </div>
      </div>
    );
  }
}

export default SerachBar;