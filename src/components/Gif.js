import React, { Component } from 'react';
//import PropTypes from "prop-types"


class Gif extends Component{

    constructor (props){
        super(props);       // le pasa a este componente toda la lógica que trae el paquete component
        this.state = {           //recibe todas las propiedades y valores
            gif:""
        }
    }
    apiCall (url,concecuencia){
        fetch(url)
            .then( response => response.json())
            .then(data => concecuencia (data))
            .catch( error => console.log(error))
    }

    componentDidMount() { 
        console.log("Me monté");
        this.traerGifNuevo()
    }

    traerGifNuevo() {
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G", this.mostrarGif)
        }

    mostrarGif = ( data ) => {   //cuando usamos setState necesitamos una ArrowFunction
        console.log( data );     //con esta línea podemos ver en la consola del navegador como se llama el elemento de la api que nos interesa 
        this.setState({
            gif: data.data.images.original.url
                //image_url es la clave del objeto literal entregado por la api que vimos con el console.log de arriba
        })
    }
   
    componentDidUpdate() { 
        console.log("Me actualicé");
        alert("Tengo un gif nuevo!")
    }
    
    

    render(){
        let contenido;
    
        if (this.state.gif === "") {
            contenido = <p>Cargando…</p>
        } else {
            contenido = <  img src={ this.state.gif} alt="Gif"></img>
        }
        return (
            
            <div >
               { contenido }
               <button onClick = { ()=> this.traerGifNuevo()}>Random Gif!</button>
            </div>
        )   
    }
}

export default Gif;