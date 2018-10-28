import React, { Component } from 'react';
import './App.css';
import './AppSass.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./pages/CreatePost/CreatePost";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import PostDetail from "./pages/PostDetail/PostDetail";
import Page404 from "./pages/Page404/Page404";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Switch>
                <Route exact path = "/" component = {Landing} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/home" component = {Home} />
                <Route exact path = "/user" component = {UserProfile} />
                <Route exact path = "/create" component = {CreatePost} />
                <Route exact path = "/post" component = {PostDetail} />
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
