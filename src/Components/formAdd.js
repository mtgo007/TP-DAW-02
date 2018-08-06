import React, { Component } from 'react';
import axios from 'axios'

class FormAdd extends Component {

  constructor(props){
      super(props);
      this.state = {
          nome:this.props.user.nome||'',
          email:this.props.user.email||'',
          senha:this.props.user.senha||'',
          endereco:this.props.user.endereco||'',
          telefone:this.props.user.telefone||'',
          tipoUsuario:this.props.user.tipoUsuario||'company',
          loading:"",
          success:0,
          message:""
      }
  }

  add(){
    this.props.changeBackground("spinner-1");
    this.setState({loading:"background-loading"})
      let user = {
        name:this.state.nome,
        email:this.state.email,
        password:this.state.senha,
        address:this.state.endereco,
        telephone:this.state.telefone,
        role:this.state.tipoUsuario
      }
      let atual = this;
      // Verficar com o Back a adição do Usuario
      //mudar o estado
      if(user.name && user.email && user.password && user.address && user.telephone){
        axios.post('/api/v1/register', user)
          .then(function (res) {
            if(res.status === 200){
          atual.setState({success:1}, ()=>{
              atual.setState({message:"Usuário Adicionado Com Sucesso"});
              atual.props.changeBackground("");
              atual.setState({loading:""})
              });
              setTimeout(()=>{
                atual.props.changeState(0, user);
              },3000)
            }
          })
          .catch(function (error) {
            console.log(error);
            atual.props.changeBackground("");
            atual.setState({success:0}, ()=>{
              atual.setState({message:"*Dados Invalidos"})
            });
            setTimeout(()=>{
              atual.setState({message:""})
            },2000);
          });
      } else{
        this.props.changeBackground("");
        this.setState({loading:""})
        this.setState({success:0}, ()=>{
          this.setState({message:"*Campos Nulos"})
        });
        setTimeout(()=>{
          this.setState({message:""})
        },2000);
      }
  }

  render() {
    return (
      <div  className={`FormAdd mt-5 container w-75 mx-auto jumbotron ${this.state.loading}`}>
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
              <option >company</option>
              <option >station</option>
            </select>
        </div>
        <p className={`text-center ${this.state.success===0 ? "text-danger" : "text-success"}`}>{this.state.message}</p>
        <button type="submit" className="w-100 btn btn-outline-success" onClick={this.add.bind(this)}>
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

export default FormAdd;