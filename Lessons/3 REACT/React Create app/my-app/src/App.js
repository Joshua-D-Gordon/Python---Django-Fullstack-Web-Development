
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit now <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer/>
    </div>

    
  );
}

export default App;
