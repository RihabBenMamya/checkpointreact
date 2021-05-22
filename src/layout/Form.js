import React from 'react-bootstrap';

import '../App.css';
import Home from '../App';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
  return (
     <Router>
    <div className="App">
         <Navbar />
         <Switch>
     
      <Route path="/" exact component={Home}/>
      <Route path="/form" component={Login}/>
     
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
