import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand text-success" onClick={()=>this.props.changeState(0, undefined)} href="#">Tp-02</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link text-success" href="#">Home</a>
            </div>
          </div>
          <a className="navbar-brand" href="#">
            <img src="https://cdn3.iconfinder.com/data/icons/eco-flat-2/512/Ecology_recycle_recyclingwaste-512.png" width="30" height="30" alt=""/>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;