import React, { Component } from 'react';
import Navbar from './navbar';
import FormLogin from './formLogin';
import axios from 'axios'


class Login extends Component {
  login = (email, senha)=>{
    let usuario = {
      nome:"Mathias",
      email:"mtgo@mtgo.com",
      endereco: "Rua da Bahia",
      telefone:"3194799570",
      tipoUsuario:"Comprador"
    }
    let login = this
    // handle pega dados do usuario
    axios.post('/api/v1/login', {
      email: email,
      password: senha
    })
    .then(function (res) {
      if(res.status === 200){
        login.props.changeState(2, usuario)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    // if(email == "mathias" && senha == "123"){
    //   this.props.changeState(2, email);
    // } else {
    //   console.log('erro');
    // }
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
