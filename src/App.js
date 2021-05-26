import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
       
       <Navbar />
       <header className="App-header bg-image"><h1>First React Checkpoint</h1>
       <p>Example page header</p>
       </header>
       <Login/>
      <br />
     
      
      <Footer />
     
    </div>
  );
}

export default App;
