const listaHobbies = () => {
    return fetch("https://api-rest-omf3.onrender.com/hobbies").then((respuesta) =>respuesta.json());
}

const crearHobbie = (titulo, img) => {
    return fetch("https://api-rest-omf3.onrender.com/hobbies",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({titulo, img, id: uuid.v4()})
    }).then((respuesta) => {
        console.log(respuesta);
    })

}

const eliminarHobbie = (id) => {
return fetch(`https://api-rest-omf3.onrender.com/hobbies/${id}`,{
    method: 'DELETE'
}).then((respuesta) => console.log(respuesta));
}

const detalleHobbie = (id) => {
    return fetch(`https://api-rest-omf3.onrender.com/hobbies/${id}`).then((respuesta) => respuesta.json());
}

const actualizarHobbie = (id, titulo, img) => {
    return fetch(`https://api-rest-omf3.onrender.com/hobbies/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, titulo, img})
    }).then((respuesta) => console.log(respuesta));
}

export const serviceHobbies = {
    listaHobbies,
    crearHobbie,
    eliminarHobbie,
    detalleHobbie,
    actualizarHobbie
}