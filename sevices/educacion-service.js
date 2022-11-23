const listaEducacion = () =>{
    return fetch("https://api-rest-omf3.onrender.com/educacion").then((respuesta) => respuesta.json());
}

const crearEducacion = (titulo, descripcion, img) => {
    return fetch("https://api-rest-omf3.onrender.com/educacion",{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({titulo, descripcion, img, id:uuid.v4()})  
    }).then((respuesta) => console.log(respuesta));

}

const eliminarEducacion = (id) => {
    return fetch(`https://api-rest-omf3.onrender.com/educacion/${id}`, {
        method: 'DELETE'
    })
}

const detalleEducacion = (id) => {
    return fetch(`https://api-rest-omf3.onrender.com/educacion/${id}`).then((respuesta) => respuesta.json())
}

const actualizarEducacion = (id, titulo, descripcion, img) => {
    return fetch(`https://api-rest-omf3.onrender.com/educacion/${id}`,{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({id, titulo, descripcion, img})  
      }).then((respuesta) => console.log(respuesta));
  
  }

export const serviceEducacion = {
    listaEducacion,
    crearEducacion,
    eliminarEducacion,
    detalleEducacion, 
    actualizarEducacion

}