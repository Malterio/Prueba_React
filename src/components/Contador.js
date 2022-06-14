import React, { Component } from 'react'

class Contador extends Component{
    constructor (props) {
        super(props);       // le pasa a este componente toda la lógica que trae el paquete component
        this.state = {           //recibe todas las propiedades y valores
            numero: props.inicial
        }
    }

    incrementar (){
        this.setState({
            numero: this.state.numero + 1
        })
    }
    decrementar (){
        this.setState({
            numero: this.state.numero - 1
        })
    }
    componentDidMount() { 
        console.log("Me monté");
    }
    componentDidUpdate() { 
        console.log("Me actualicé");
    }
    componentWillUnmount() { 
    console.log("Me actualicé");
    }

    render(){
        return (
            <div >
               <p> Soy el numero {this.state.numero}</p>
               <button onClick={ ()=> this.incrementar () }> incrementar </button>
               <button onClick={ ()=> this.decrementar () }> decrementar </button>
            </div>
        )   ;
    }
}

export default Contador;

