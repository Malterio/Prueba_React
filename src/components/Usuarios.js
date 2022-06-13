import React from 'react'



function Usuarios(props) {
    
    const usuarios = [
        {           
            edad : 18 ,
            // nombre : Juan
        },
        {           
            edad : 23 ,
            // nombre : Lucas

        }];
    const id = Number(props.match.params.id) //el comando Number me pasa a numero con formato numero el valor queme venga
    const usuario = usuarios.find(user=>user.id ===id)

    return (
        <div >
            <h2 className="sarasa"> {usuario.edad}</h2>
                  
        </div>
    );
}


export default Usuarios;