import React, { Component } from 'react';
import '../Css/login.css'

class FormLogin extends Component {

  constructor(props){
      super(props);
      this.state = {
        email: '',
        senha:'',
        erroMensage:this.props.erroMensage
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
      } else{

        let atual = this;
        this.setState({erroMensage:"*Campos Nulos"});
        setTimeout(()=>{
          atual.setState({erroMensage:""});
        },2000)
      }
  }
   bgImage(props) {
    const imageUrl = require(`./public${props.back}.jpg`)
    return <div style={{ backgroundImage: `url(${imageUrl})` }} />
  }
  
  render() {
    return (
      <div className={`FormLogin w-50 mx-auto ${this.props.classeLogin}`}>
      <div className="shadow-lg p-3 mb-5 bg-white mt-5 login-form container">
          <div className="form-group">
            <p className="text-center">Email</p>
            <input type="email" className="form-control" id="email"   placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          </div>
          <div className="form-group">
            <p className="text-center">Senha</p>
            <input type="password" className="form-control"   id="exampleInputPassword1" id="password" placeholder="Senha"
            value={this.state.senha} onChange={this.handleSenhaChange.bind(this)}/>
          </div>
          <p className="text-center mt-2 rounded text-danger">{this.state.erroMensage ? this.state.erroMensage : this.props.erroMensage}</p>

          <div className="row mr-2 ml-2 d-flex align-items-end ">
            
            <button type="submit" className="w-100 mr-2 buttons container col-5 mt-2 btn btn-outline-success" onClick={this.autentica.bind(this)}>Logar</button>
            <button type="submit" className="w-100 mt-2 col-5 buttons container btn btn-outline-info" onClick={this.handleAdd.bind(this)}>Cadastre-se</button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default FormLogin;
