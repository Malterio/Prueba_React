import React, { Component } from 'react'
import Pelicula from './Pelicula/Pelicula'

//function TiraPeliculas() {
class TiraPeliculas extends Component{
    render(){
    return (
        <div >
            <Pelicula generos={["Fantasia", "aventura"]} rating={8} titulo="Harry Potter"/>   
            <Pelicula generos={["Fantasia", "aventura"]} rating={7} titulo="Harry Potter 2"/>      
        </div>
    );
}
}

export default TiraPeliculas;
