import React, { Component } from 'react';
import './App.css';
import './AppSass.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CreatePost from "./pages/CreatePost/CreatePost";
import Landing from "./pages/Landing/Landing";
// import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          < Landing />
      </div>
    );
  }
}

export default App;
