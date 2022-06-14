
import React from 'react';
import './App.css';
import ContenedorPublicidad from "./components/ContenedorPublicidad"
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador';
import Gif from './components/Gif';
import Home from './components/Home'
import Usuarios from './components/Usuarios'
//import AgregarFrutas from './components/AgregarFrutas'
import Error404 from './components/Error404'
import {Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Link to="/contador" exact={true}>Contador</Link>
      <Link to="/gif" exact={true}>Gif</Link>
      <Link to="/tiraPeliculas" exact={true}>TiraPeliculas</Link>
      <Link to="/contenedorPublicidad" exact={true}>ContenedorPublicidad</Link>
      <Link to="/" exact={true}>Home</Link>
      <Link to="/usuarios/0" exact={true}>Usuarios0</Link>
      <Link to="/usuarios/1" exact={true}>Usuarios1</Link>
      <Link to="/agregarFrutas" exact={true}>AgregarFrutas</Link>
  

      <Routes>
        <Route path="/contador"  element={<Contador/>}/>   
        {/* <Route exact path="/">
            <Home/>
        </Route>  */}
        <Route path="/tiraPeliculas" element={<TiraPeliculas/>}/>
        <Route path="/gif"  element={<Gif/>}/>
        <Route path="/contenedorPublicidad"  element={<ContenedorPublicidad/>}/> 
        <Route path="/"  element={<Home/>}/> 
        <Route path="/usuarios/:id"  element={<Usuarios/>}/>
        {/* <Route path="/agregarFrutas" element={<AgregarFrutas/>}/> */}
        <Route path="*" element={<Error404/>}/>
      </Routes>       
      </header>
      {/* <main>
        <Gif/>
        <ContenedorPublicidad>
          <h2>Woow! Publicidad</h2>
        </ContenedorPublicidad>
        <TiraPeliculas/>
        <ContenedorPublicidad>
          <ul>
            <li> Publicidad 1 </li>
            <li> Publicidad 1 </li>
            <li> Publicidad 1 </li>
          </ul>
        </ContenedorPublicidad>
        <Contador inicial={0} />
      </main> */}
    </div>
  );
}

export default App;
