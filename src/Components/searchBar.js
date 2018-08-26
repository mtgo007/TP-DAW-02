import React, { Component } from 'react';
import axios from 'axios';

class SerachBar extends Component {

    constructor(){
        super();
        this.state={
            search:''
        }
    }

    componentWillMount(){
      console.log(`bearer ${this.props.token}`);
      axios.get("/api/v1/types",{},{
        headers:{
             "Content-Type": "application/json",
            "Authorization": `bearer ${this.props.token}`
        }
    })
     .then(res => console.log(res))
     .catch(e => console.log(e))
    }

    handlesearch = () => {
      console.log(this.state.search)
        this.props.search(this.state.search);
    }

  render() {
    return (
      <div  className="SerachBar w-50 mx-auto mt-5">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fas fa-search"></i></span>
          </div>
          <select class="form-control" id="exampleFormControlSelect1">
            {this.state.tipos}
          </select>
        </div>
      </div>
    );
  }
}

export default SerachBar;