import React from 'react'
import { useParams } from 'react-router-dom';
const usuarios = [
    {   
        id: 0,
        nombre : 'Juan' ,       
        edad : 18 ,
        
    },
    {  
        id: 1,
        nombre : 'Lucas',         
        edad : 23 ,
        

    }];

function Usuarios(props) {
    console.log(useParams());
    const id = Number(useParams().id) //el comando Number me pasa a numero con formato numero el valor queme venga
    const usuario = usuarios.find(user=>user.id ===id)

    return (
        <div >
            <h2> {usuario.nombre}</h2>
            <h2> {usuario.edad}</h2>
                  
        </div>
    );
}


export default Usuarios;