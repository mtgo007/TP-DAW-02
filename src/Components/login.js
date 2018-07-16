import React, { Component } from 'react';
import Navbar from './navbar';
import FormLogin from './formLogin';
import axios from 'axios'


class Login extends Component {
  login = (email, senha)=>{
    //handle login e mudança de estado
    // axios.post("http://localhost:5050/login", {email,senha})
    // .then(res => console.log(res))
    // .catch(e => console.log(e))
    // handle pega dados do usuario
    if(email == "mathias" && senha == "123"){
      this.props.changeState(2, email);
    } else {
      console.log('erro');
    }
  }

  render() {
    return (
      <div  className="Login">
        <Navbar changeState={this.props.changeState.bind(this)}/>
        <FormLogin  changeState={this.props.changeState} login={this.login.bind(this)}/>
      </div>
    );
  }
}

export default Login;
