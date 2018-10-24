import React, { Component } from 'react';
import LogoBlack from "../../static/images/LogoWhite.png";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid Navbar">
        <span id="navbarLeft">
          <button id="homeBtnBox">
            <img id="homeBtn" src={LogoBlack} alt="Home Button"></img>
          </button>
        </span>
        <span id="navbarRight">
        <i className="fas fa-plus-square navbarBtn"></i>
        <i className="fas fa-user navbarBtn"></i>
        <i className="fas fa-sign-out-alt navbarBtn"></i>
        </span>
      </div>
    );
  }
}

export default Navbar;
