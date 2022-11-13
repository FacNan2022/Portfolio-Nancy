const infoPerfil = () =>{
    return fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());
}

const detallePerfil = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json());
}

const actualizarPerfil = (id, nombre, apellido, descripcion, img, ciudad) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({id, nombre, apellido, descripcion, img, ciudad})
    }).then((respuesta)=> console.log(respuesta));
} 

export const servicePerfil = {
    infoPerfil,
    detallePerfil,
    actualizarPerfil
}