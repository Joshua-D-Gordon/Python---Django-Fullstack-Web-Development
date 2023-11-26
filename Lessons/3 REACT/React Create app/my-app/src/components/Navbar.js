import logo from './logo.svg';
function Navbar () {
return(
    <div className="header">
        <div className="left">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactFacts</h1>
        </div>
          <h2>React course projects</h2>
      </div>
)
}

export default Navbar