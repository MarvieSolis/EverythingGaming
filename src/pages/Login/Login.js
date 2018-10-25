import React, { Component } from 'react';
import Logo from "../../static/images/LogoMain.png";

class Login extends Component {

    state = {
        signin: true,
        signup: false,
        email: "",
        password: "",
        passwordVerify: "",
        imageUrl: "",
        firstName: "",
        lastName: "",
        username: ""
    }

    renderSignIn = () => {
        this.setState({ signin: true, signup: false });
        console.log(this.state);
    }

    renderSignUp = () => {
        this.setState({ signin: false, signup: true });
        console.log(this.state);
    }

    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value }, () => { console.log(name, value) });
    }

    render() {
        return (
            <div className="container-fluid Login">
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="landingLogo" src={Logo} alt="Everything Gaming Logo"></img>
                        <h1 id="landingTitle">Everything Gaming</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <div className="container signInUpBox">
                            <button className="loginPageBtn" id="signInBtn" onClick={this.renderSignIn}>Sign In</button>
                            <button className="loginPageBtn" id="signUpBtn" onClick={this.renderSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.state.signin ?
                        <div className="col-sm-8">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="userEmail">Email address</label>
                                    <input type="email" name="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Password</label>
                                    <input type="password" name="password" className="form-control" id="userPassword" placeholder="Password" onChange={this.handleInput} />
                                </div>
                                <button type="submit" className="btn submitBtn">Sign In</button>
                            </form>
                        </div>
                        :
                        <div className="col-sm-8">
                            <form>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="userFirstName">First Name</label>
                                            <input type="name" name="firstName" className="form-control" id="userFirstName" aria-describedby="emailHelp" placeholder="First Name" onChange={this.handleInput} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="userLastName">Last Name</label>
                                            <input type="name" name="lastName" className="form-control" id="userLastName" aria-describedby="emailHelp" placeholder="Last Name" onChange={this.handleInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userEmail">Email address</label>
                                    <input type="email" name="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Password</label>
                                    <input type="password" name="password" className="form-control" id="userPassword" placeholder="Password" onChange={this.handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPasswordVeriify">Re-enter Password</label>
                                    <input type="password" name="passwordVerify" className="form-control" id="userPasswordVerify" placeholder="Re-enter Password" onChange={this.handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userImageUrl">Image Link</label>
                                    <input type="url" name="imageUrl" className="form-control" id="imaegUrl" placeholder="Paste image link here (must be 1:1)" onChange={this.handleInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="username" name="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter username (letters and numbers only)" onChange={this.handleInput} />
                                </div>
                                <button type="submit" className="btn submitBtn">Sign Up</button>
                            </form>

                        </div>}
                </div>
            </div>
        );
    }
}

export default Login;