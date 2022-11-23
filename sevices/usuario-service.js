const leerUsuario = () => {
return fetch('https://api-rest-omf3.onrender.com/usuario').then((respuesta) => respuesta.json());
}

const actualizarUsuario = (id,email, password, registrada) =>  {
    return fetch(`https://api-rest-omf3.onrender.com/usuario/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, email, password, registrada})
    }).then((respuesta) => console.log(respuesta))
}

export const usuarioService = {
    leerUsuario,
    actualizarUsuario
}