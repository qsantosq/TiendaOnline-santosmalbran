import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
         <Switch>
            <Route path="/" exact>
               <ItemListContainer/>
            </Route>

            <Route path="/detail/:paramId">
                 <ItemDetailContainer />
            </Route>

            <Route path="/count">
                 <ItemCount stock={5} initial={1} />
            </Route>      
        </Switch> 

      </Router>
    </div>
  );
}

export default App;
