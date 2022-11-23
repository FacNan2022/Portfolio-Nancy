const infoPerfil = () =>{
    return fetch("https://api-rest-omf3.onrender.com/perfil").then((respuesta)=>respuesta.json());
}

const detallePerfil = (id) =>{
    return fetch(`https://api-rest-omf3.onrender.com/perfil/${id}`).then((respuesta)=>respuesta.json());
}

const actualizarPerfil = (id, nombre, apellido, descripcion, img, ciudad) =>{
    return fetch(`https://api-rest-omf3.onrender.com/perfil/${id}`,{
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