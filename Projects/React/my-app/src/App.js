import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Herosection from './componets/Herosection';
import Main from './componets/Main';
import Card from './componets/Card';

function App() {
  return (
    <div className="App">
      <Navbar
      img="https://picsum.photos/50/50"
      menuitem="menu item"
      btn="Sign Up"
      />
      <Herosection/>
      <Main
      headline="Online experiances"
      parag ="Join uniqe interactive activites led by world renoun proffessinals with out leaving home."/>
      <Card
      value = {true}
      frm = "from $"
      amount={5*5*5}/>
    </div>
  );
}

export default App;
