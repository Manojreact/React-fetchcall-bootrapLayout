import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import Header from '../components/Header/header';
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Header" component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
