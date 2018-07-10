import React, { Component } from 'react';
import FormAdd from './formAdd';
import Navbar from './navbar';

class Add extends Component {

  render() {
    return (
      <div  className="Add">
        <Navbar changeState={this.props.changeState.bind(this)}/>
        <FormAdd user={{}} btnText='Cadastrar' changeState={this.props.changeState.bind(this)} />
      </div>
    );
  }
}

export default Add;