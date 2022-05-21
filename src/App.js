import React from "react";
import Home from "./components/Home/Home";
import Moviedetail from "./components/MovieDetail/Moviedetail";
import Pagenotfound from "./components/PageNotFound/Pagenotfound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={Moviedetail} />
            <Route component={Pagenotfound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
