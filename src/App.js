import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
       <Navbar />
       <header className="App-header bg-image"><h1>First React Checkpoint</h1>
       <p>Example page header</p>
       </header>

       <Route path="/login"><Login/></Route>
       
      <br />
     
      
      <Footer />
      </Router>
    </div>
  );
}

export default App;
