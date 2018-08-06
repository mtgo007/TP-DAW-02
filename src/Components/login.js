import React, { Component } from 'react';
import Navbar from './navbar';
import FormLogin from './formLogin';
import axios from 'axios'


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:"",
      background:"",
      erromensage:""
    }
  }

  login = (email, senha)=>{
    this.setState({loading:" spinner-1"});
    this.setState({background:" background-loading"});
    let atual = this;
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
        atual.setState({loading:""});
        atual.setState({background:""});
      }
    })
    .catch(function (error) {
      console.log(error);
      atual.setState({loading:""});
      atual.setState({background:""});
      atual.setState({erromensage:"*Usuario ou Senha Invalidos"})
      setTimeout(()=>{
        atual.setState({erromensage:""})
      },2000);
    });
    // if(email == "mathias" && senha == "123"){
    //   this.props.changeState(2, email);
    // } else {
    //   console.log('erro');
    // }
  }

  render() {
    return (
      <div  className={`Login ${this.state.loading}`}>
        <Navbar changeState={this.props.changeState.bind(this)}/>
        <FormLogin erroMensage={this.state.erromensage} classeLogin={this.state.background} changeState={this.props.changeState} login={this.login.bind(this)}/>
      </div>
    );
  }
}

export default Login;
