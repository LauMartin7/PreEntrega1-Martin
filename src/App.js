
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import logoNavBar from "./img/logo.png";
import babyItemLC from "./img/baby.jpg";




function App() {
  return (
    <div className="App">
      <NavBar img={logoNavBar}/>
      <ItemListContainer img={babyItemLC} greeting='Bienvenidos al sitio donde encontrarás todo para tu bebé'/>
    </div>
  );
}

export default App;
