import React, { Component } from 'react';
import FormAdd from './formAdd';
import Navbar from './navbar';

class Add extends Component {

  constructor(props){
    super(props);
    this.state = {
      spinner:""
    }
  }

  changeBackground = (estado) =>{
    this.setState({spinner:estado})
  }

  render() {
    return (
      <div  className={`Add ${this.state.spinner} signUp`}>
        <Navbar changeState={this.props.changeState.bind(this)}/>
        <FormAdd changeBackground={this.changeBackground} user={{}} btnText='Cadastrar' changeState={this.props.changeState.bind(this)} />
      </div>
    );
  }
}

export default Add;