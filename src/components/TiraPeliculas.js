import React, { Component } from 'react'
import Pelicula from './Pelicula/Pelicula'

//function TiraPeliculas() {
class TiraPeliculas extends Component{
    lanzarAlerta(){
        alert("Me clickeaste");
    }
    cambiarAmarillo(){
        document.querySelector("body").style.backgroundColor="Yellow"
    }
    cambiarRosa(){
        document.querySelector("body").style.backgroundColor="Pink"
    }
    render(){
    return (
        <div onClick={ this.lanzarAlerta} onMouseOver={ this.cambiarAmarillo} onMouseOut={ this.cambiarRosa}>     
            <Pelicula generos={["Fantasia", "aventura"]} rating={8} titulo="Harry Potter"/>   
            <Pelicula generos={["Fantasia", "aventura"]} rating={7} titulo="Harry Potter 2"/>      
        </div>
    );
}
}

export default TiraPeliculas;
