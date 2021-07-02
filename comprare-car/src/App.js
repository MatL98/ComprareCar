import Navbar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemList/ItemListContainer'
import './App.css';


function App() {
  return (
    <div className="App">
    <>
    <div className="App">
    <Navbar nombreDeTienda="ComprareCar"/>
    <ItemList saludo = "Bienvenido a nuestra tienda de autos" ></ItemList>
    </div>
    </>
    </div>
  );
}

export default App;
