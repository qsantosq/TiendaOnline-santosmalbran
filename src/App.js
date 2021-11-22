import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer  name={"Resto Santos-Malbran"}/>
    </div>
  );
}

export default App;
