import React from 'react';
import './App.css';
import About from './components/about/about';
import Home from './components/home/home';
import Registr from './components/registration/registration';


import {Route, Link, BrowserRouter as Router} from "react-router-dom";


const App: React.FC = () => {
  
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <ul id='shed'>
        <li><Link to="/">Registration</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route exact path="/" component={Registr} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />  
      </Router>
      </header>
     
    </div>
  );
}

export default App;
