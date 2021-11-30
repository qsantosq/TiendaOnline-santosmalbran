import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

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
