import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import ErrorGIF from "../../static/images/ErrorGIF.gif";

class Page404 extends Component {
  render() {
    return (
      <div>
        < Navbar />

        <div className="container page404">
        <div className="row justify-content-center">
            <div className="col-sm-12">
              <h6 id="page404Text">
                We're not mad. We're actually impressed you found this page.
              </h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <img id="errorGIF" src={ErrorGIF} alt="Error Gif"></img>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Page404;
