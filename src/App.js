
import React from 'react';
import './App.css';
import ContenedorPublicidad from "./components/ContenedorPublicidad"
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
