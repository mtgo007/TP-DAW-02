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
    let login = this
    // handle pega dados do usuario
    axios.post('/api/v1/login', {
      email: email,
      password: senha
    })
    .then(function (res) {
      if(res.status === 200){
        console.log(res)
        let user = {
          id:res.data.data.user.id,
          nome: res.data.data.user.name,
          email:res.data.data.user.email,
          endereco: res.data.data.user.address,
          tipoUsuario:res.data.data.user.role[0],
          telefone:res.data.data.user.telephone,
          token:res.data.data.token.original.access_token
        }
        login.props.changeState(2, user)
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

///// Lembrar login

    if(email == "italo" && senha == "123"){
      this.props.changeState(2, email);
    } else {
      console.log('erro');
    }
  }
////////////


  render() {
    return (
      <div  className={`Login ${this.state.loading} login`}>
        <Navbar changeState={this.props.changeState.bind(this)}/>
        <FormLogin erroMensage={this.state.erromensage} classeLogin={this.state.background} changeState={this.props.changeState} login={this.login.bind(this)}/>
      </div>
    );
  }
}

export default Login;
