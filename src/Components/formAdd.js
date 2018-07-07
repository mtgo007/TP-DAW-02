import React, { Component } from 'react';

class FormAdd extends Component {

  constructor(){
      super();
      this.state = {
          nome:'',
          email:'',
          senha:'',
          endereco:'',
          telefone:'',
          tipoUsuario:'Comprador'
      }
  }

  add(){
      let user = {
        nome:this.state.nome,
        email:this.state.email,
        senha:this.state.senha,
        endereco:this.state.endereco,
        telefone:this.state.telefone,
        tipoUsuario:this.state.tipoUsuario
      }
      // Verficar com o Back a adição do Usuario
      //mudar o estado
      console.log(user);
      if(user.nome && user.email && user.senha && user.endereco && user.telefone){
          this.props.changeState(0, undefined);
      }
  }

  render() {
    return (
      <div  className="FormAdd mt-5 container jumbotron">
        <div className="form-group">
          <p className="text-center" >Nome</p>
          <input type="name" class="form-control"    placeholder="Nome" value={this.state.nome} onChange={(event)=>this.setState({nome:event.target.value})} />
        </div>
        <div className="form-group">
          <p className="text-center" >Email</p>
          <input type="email" class="form-control"    placeholder="Email" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
        </div>
        <div className="form-group">
          <p className="text-center" >Senha</p>
          <input type="password" className="form-control"    placeholder="Senha" value={this.state.senha} onChange={(event)=>this.setState({senha:event.target.value})}/>
        </div>
        <div className="form-group">
          <p className="text-center" >Endereço</p>
          <input type="text" className="form-control"    placeholder="Endereço" value={this.state.endereco} onChange={(event)=>this.setState({endereco:event.target.value})}/>
        </div>
        <div className="form-group">
          <p className="text-center" >Telefone</p>
          <input type="tel" className="form-control"    placeholder="Telefone" value={this.state.telefone} onChange={(event)=>this.setState({telefone:event.target.value})}/>
        </div>
        <div className="form-group">
            <p className="text-center" >Tipo de Usuário</p>
            <select className="custom-select mr-sm-2" value={this.state.tipoUsuario} onChange={(event)=>this.setState({tipoUsuario:event.target.value})}>
              <option >Comprador</option>
              <option >Estação de Coleta</option>
              <option >Catador</option>
            </select>
        </div>
        <button type="submit" className="w-100 btn btn-outline-success" onClick={this.add.bind(this)}>Cadastrar</button>
      </div>
    );
  }
}

export default FormAdd;