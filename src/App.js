
import React from 'react';
import './App.css';
import ContenedorPublicidad from "./components/ContenedorPublicidad"
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador';
import Gif from './components/Gif';
import Home from './components/Home'
import Usuarios from './components/Usuarios'
import AgregarFrutas from './components/AgregarFrutas'
import FrutasVersionFuncion from './components/FrutasVersionFuncion'
import RickMortyClass from './components/RickMortyClass'
import RickMortyFn from './components/RickMortyFn'
import Error404 from './components/Error404'
import {Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Link to="/contador" >Contador</Link>
      <Link to="/gif" >Gif</Link>
      <Link to="/tiraPeliculas" >TiraPeliculas</Link>
      <Link to="/contenedorPublicidad" >ContenedorPublicidad</Link>
      <Link to="/" >Home</Link>
      <Link to="/usuarios/0" >Usuarios0</Link>
      <Link to="/usuarios/1" >Usuarios1</Link>
      <Link to="/agregarFrutas" >AgregarFrutas</Link>
      <Link to="/frutasVersionFuncion" >Frutas Version Funcion</Link>
      <Link to="/rickMortyClass" >RickMortyClass</Link>
      <Link to="/rickMortyFn" >RickMortyFn</Link>

      <Routes>
        <Route path="/contador"  element={<Contador inicial={0} />}/>   
        {/* <Route exact path="/">
            <Home/>
        </Route>  */}
        <Route path="/tiraPeliculas" element={<TiraPeliculas/>}/>
        <Route path="/gif"  element={<Gif/>}/>
        <Route path="/contenedorPublicidad"  element={
          <ContenedorPublicidad>
            <ul>
            <li> Publicidad 1 </li>
            <li> Publicidad 1 </li>
            <li> Publicidad 1 </li>
          </ul>
          </ContenedorPublicidad>
        }/> 
        <Route path="/"  element={<Home/>}/> 
        <Route path="/usuarios/:id"  element={<Usuarios/>}/>
        <Route path="/agregarFrutas" element={<AgregarFrutas/>}/>
        <Route path="/frutasVersionFuncion" element={<FrutasVersionFuncion/>}/>
        <Route path="/rickMortyClass" element={<RickMortyClass/>}/>
        <Route path="/rickMortyFn" element={<RickMortyFn/>}/>
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

// "start": "react-scripts start", 