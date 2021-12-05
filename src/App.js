import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
      <ItemDetailContainer />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
