import React, { Component } from 'react';

class EditUser extends Component {
  render() {
    return (
      <div className="EditUser container jumbotron mt-5 w-50 mx-auto">
        <div className="form-group ">
          <p className="text-center" >Email</p>
          <input type="name" class="form-control"    placeholder="Email"/>
        </div>
        <div className="form-group">
          <p className="text-center" >Confirme sua senha</p>
          <input type="name" class="form-control"    placeholder="Senha"/>
        </div>
        <div className="form-group">
          <p className="text-center" >Nova Senha</p>
          <input type="name" class="form-control"    placeholder="Nova Senha"/>
        </div>
        <button type="submit col-2" class="btn btn-success float-right">Alterar senha</button>
      </div>
    );
  }
}

export default EditUser;