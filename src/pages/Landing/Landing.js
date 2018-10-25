import React, { Component } from 'react';
import Logo from "../../static/images/LogoMain.png";
import GIF from "../../static/images/landingGif.gif";

class Landing extends Component {
    render() {
        return (
            <div className="container-fluid Landing">
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="landingLogo" src={Logo} alt="Everything Gaming Logo"></img>
                        <h1 id="landingTitle">Everything Gaming</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="landingGif" src={GIF} alt="gaming gif"></img>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <div className="container landingTextWrapper">
                            <h6 id="landingText">Your all-gaming blogging source for walkthroughs, reviews, and discussions.
                                Login to create posts and comment throughout the site!
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <div className="container buttonBox">
                            <div className="row justify-content-center btnRow">
                                <div className="col-auto">
                                    <button className="landingBtn" id="loginBtn">Login</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-auto">
                                    <a href="/home">
                                        <button className="landingBtn" id="exploreBtn">Explore</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center footer">
                    <div className="col-sm-12">
                        <h6 id="landingCopyrightText">&copy; Marvie Solis 2018
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;