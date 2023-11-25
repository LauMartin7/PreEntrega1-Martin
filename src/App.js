
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import logoNavBar from "./img/logo.png";
import babyItemLC from "./img/baby.jpg";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import imgTarjetaCategory from "./img/tarjetas.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar img={logoNavBar}/>
        <Routes>
          <Route path="/" element={<ItemListContainer imgB={babyItemLC} greeting='Bienvenidos al sitio donde encontrarás todo para tu bebé' oferta='30% de descuento EFECTIVO/TRANSFERENCIA'/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer imgB={imgTarjetaCategory} greeting='ENVIO GRATIS en Cba Capital' oferta='30% de descuento EFECTIVO/TRANSFERENCIA'/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
