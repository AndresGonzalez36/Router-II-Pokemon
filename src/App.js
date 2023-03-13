import Barra from "./component/Barra";
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Detalle from "./views/Detalle";
import NotFound from "./views/NotFound";




function App() {


  return (
    <div className="App">
 
      <BrowserRouter>
      <Barra/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Personajes/>}/>
      <Route path="/pokemons/:id" element={<Detalle/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
