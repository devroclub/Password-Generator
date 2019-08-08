import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from "./Home";
import Route from "react-router-dom/es/Route";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <nav className="navbar navbar-expand-md navbar-light">
                  <div className="container">
                      <a className="navbar-brand" href="/">
                          <img height="40px" src={require('../logo.png')} alt="Password Generator Logo" />
                      </a>

                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                              aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <a className="nav-link" href="/about">ABOUT</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" target="_blank" href="https://devrolabs.com/products-landing-page">OTHER PRODUCTS</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" target="_blank" href="https://devrolabs.com/">COMPANY</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <Route exact={true} path='/' render={(props) => (
                  <Home {...props} />
              )}/>
              <Route path='/:passcode' render={(props) => {
                  if (props.match.params.passcode === "about") return (<About />);
                  return (<Home {...props} />);
              }}/>

              <div className="footer-bottom">
                  <span className="text-center">© 2019 Password Generator</span>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
