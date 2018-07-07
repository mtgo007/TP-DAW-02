import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand text-success" href="#">Tp-02</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active text-success" href="#">Home</a>
            </div>
          </div>
          <a class="navbar-brand" href="#">
            <img src="https://cdn3.iconfinder.com/data/icons/eco-flat-2/512/Ecology_recycle_recyclingwaste-512.png" width="30" height="30" alt=""/>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;