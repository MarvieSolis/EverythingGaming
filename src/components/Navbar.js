import React, { Component } from 'react';
import LogoNav from "../static/images/LogoAccent.png";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid Navbar">
        <span id="navbarLeft">
          <button id="homeBtnBox">
            <img id="homeBtn" src={LogoNav} alt="Home Button"></img>
          </button>
        </span>
        <span id="navbarRight">
          <a href="/create"><i className="fas fa-plus-square navbarBtn"></i></a>
          <a href="/user"><i className="fas fa-user navbarBtn"></i></a>
          <a href="/"><i className="fas fa-sign-out-alt navbarBtn"></i></a>
        </span>
      </div>
    );
  }
}

export default Navbar;
