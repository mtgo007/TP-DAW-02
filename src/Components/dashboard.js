import React, { Component } from 'react';
import FormAdd from "./formAdd";

class Dashboard extends Component {

  constructor(props){
      super(props);
      this.state = {
          atual : this.props.state
      }
  }

  render() {
    if(this.props.state === 1){
        return (
            <div  className="Dashboard">
                <FormAdd btnText='Salvar Alterações' user={this.props.user}/>
            </div>
        );
    }
    else{
        return(
            <div  className="Dashboard">
                {this.props.state}
            </div>
        );
    }
  }
}

export default Dashboard;