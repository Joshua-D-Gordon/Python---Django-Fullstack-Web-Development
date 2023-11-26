import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Card from './componets/Card';
import data from './data/data';

function App() {

  const cards = data.map(item =>{
    return (
      <Card 
      img={item.img}
      location={item.location}
      title={item.title}
      link={item.link}
      date={item.date}
      discription={item.discription}
      />
    )
  })
  return (
    <div className="App">
      <Header 
      img="https://picsum.photos/id/100/50/50"
      headertite = "Joshua Travel Guide"/>
      <div className="cards-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
