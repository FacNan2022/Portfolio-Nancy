const listaProyectos = () =>{
    return fetch('https://api-rest-omf3.onrender.com/proyectos').then((respuesta) => respuesta.json());

}

const agregarProyecto = ( nombre, descripcion, img, url) =>{
    return fetch('https://api-rest-omf3.onrender.com/proyectos',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({nombre,descripcion, img, url, id:uuid.v4})   
    }).then((respuesta) => console.log(respuesta))
}

const eliminarProyecto = (id) => {
    return fetch(`https://api-rest-omf3.onrender.com/proyectos/${id}`, {
        method: 'DELETE'
    })
}

const obtenerInformacion = (id) =>{
    return fetch(`https://api-rest-omf3.onrender.com/proyectos/${id}`).then((respuesta) => respuesta.json());
}

const actualizarProyecto = (id, nombre, descripcion, img, url ) => {
    return fetch(`https://api-rest-omf3.onrender.com/proyectos/${id}`, { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, nombre, descripcion, img, url})
    }).then ((respuesta) =>console.log(respuesta));
}

export const proyectosService = {
listaProyectos,
agregarProyecto,
eliminarProyecto,
obtenerInformacion,
actualizarProyecto
}