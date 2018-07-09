import React, { Component } from 'react';

class FormLogin extends Component {

  constructor(){
      super();
      this.state = {
        email: '',
        senha:''
      }
  }

  handleEmailChange(event){
    this.setState({email:event.target.value});
  }

  handleSenhaChange(event){
    this.setState({senha:event.target.value});
  }

  handleAdd(){
      this.props.changeState(1, undefined);
  }

  autentica(){
      const email = this.state.email;
      const senha = this.state.senha;
      if(email && senha){
          this.props.login(email, senha);
      }
  }

  render() {
    return (
      <div className="FormLogin">
      <div className="container jumbotron mt-5">
          <div className="form-group">
            <p className="text-center">Email</p>
            <input type="email" className="form-control" id="email"   placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          </div>
          <div className="form-group">
            <p className="text-center">Senha</p>
            <input type="password" className="form-control"   id="exampleInputPassword1" id="password" placeholder="Senha" 
            value={this.state.senha} onChange={this.handleSenhaChange.bind(this)}/>
          </div>
          <button type="submit" className="w-100 btn btn-success" onClick={this.autentica.bind(this)}>Logar</button>
          <button type="submit" className="w-100 mt-2 btn btn-outline-success" onClick={this.handleAdd.bind(this)}>Cadastre-se</button>
        </div>
      </div>
    );
  }
}

export default FormLogin;
