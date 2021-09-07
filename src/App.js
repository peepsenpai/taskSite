import './App.css';
import React from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Tickets from "./Components/Tickets";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Redirect  to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
