import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer  name={"Resto Santos-Malbran"}/>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
