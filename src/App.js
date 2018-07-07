import React, { Component } from 'react';
import Login from './Components/login'
import Add from './Components/add'

class App extends Component {

  constructor(){
    super();
    this.state = {
      atual: 0,
      emailLogado:''
    }
  }

  changeState(estado, email){
    console.log(estado)
    this.setState({atual:estado});
    this.setState({emailLogado:email});
  }

  render() {
    if(this.state.atual==0){
      return (
        <div className="App">
          <Login changeState={this.changeState.bind(this)} />
        </div>
      );
    } else if(this.state.atual==1){
      return(
        <div className="App">
          <Add changeState={this.changeState.bind(this)} />
        </div>
      );
    }
  }
}

export default App;
