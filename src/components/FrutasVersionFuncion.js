import React ,{ useState } from 'react'

function FrutasVersionFuncion (){

    const [listadoDeFrutas, setListadoDeFrutas]= useState(["Manzanas", "Pera","Banana"]);

    const agregarFrutas = e => {
        e.preventDefault();   //primero hacemos que no se refresque la pagina al enviar el formulario
        let nuevaFruta = e.target.nuevaFruta.value; //creamos un elemento nuevaFruta tomado del vasillero que nombramos en el input
        setListadoDeFrutas([
                ...listadoDeFrutas, //con los ... hacemos que sigan los valores anteriores y que se les sume el nuevo
                nuevaFruta
            ]
        );
        e.target.nuevaFruta.value = "";  //volvemos a 0 el casillero de nueva fruta
        
    }
    return (
        <div>
            <h2>Soy el componente FRUTAS FUNCION</h2>
            <ul>
            { listadoDeFrutas.map((fruta, i) => { 
               return <li key ={i}>{fruta}</li>
            })
            }
            </ul>
            <form onSubmit ={agregarFrutas}>
                        <input name="nuevaFruta" type="text"/> <br/>
                        <button>Añadir nueva fruta</button>
            </form>
        </div>
    )
}


export default FrutasVersionFuncion