import React, { Component } from 'react';

class SerachBar extends Component {

    constructor(){
        super();
        this.state={
            search:''
        }
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
          <input type="text" value={this.state.search} onChange={
              (e)=> {this.state.search=e.target.value; this.handlesearch()}} class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
        </div>
      </div>
    );
  }
}

export default SerachBar;