const leerUsuario = () => {
return fetch('http://localhost:3000/usuario').then((respuesta) => respuesta.json());
}

const actualizarUsuario = (id,email, password, registrada) =>  {
    return fetch(`http://localhost:3000/usuario/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, email, password, registrada})
    }).then((respuesta) => console.log(respuesta))
}

export const usuarioService = {
    leerUsuario,
    actualizarUsuario
}