import React, { Component } from 'react'

class FrutasVersionClase extends Component{
    constructor() {
        super();
        this.state ={
        listadoDeFrutas: ["Manzanas", "Pera","Banana"]
        }
    }

    agregarFrutas = e => {
        e.preventDefault();   //primero hacemos que no se refresque la pagina al enviar el formulario
        let nuevaFruta = e.target.nuevaFruta.value; //creamos un elemento nuevaFruta tomado del vasillero que nombramos en el input
        this.setState({      //actualizamos el estado 
            listadoDeFrutas: [
                ...this.state.listadoDeFrutas, //con los ... hacemos que sigan los valores anteriores y que se les sume el nuevo
                nuevaFruta
            ]
        });
        e.target.nuevaFruta.value = "";  //volvemos a 0 el casillero de nueva fruta
        
    }

    render (){
        return (
            <div>
                <h2>Soy el componente FRUTAS CLASS</h2>
                <ul>
                { this.state.listadoDeFrutas.map((fruta, i) => { 
                   return <li key ={i}>{fruta}</li>
                })
                }
                </ul>
                <form onSubmit ={this.agregarFrutas}>
                            <input name="nuevaFruta" type="text"/> <br/>
                            <button>Añadir nueva fruta</button>
                </form>
            </div>
        )
    }
}

export default FrutasVersionClase;

