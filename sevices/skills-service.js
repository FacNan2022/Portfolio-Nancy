const listaSkills = () => {
    return fetch('https://api-rest-omf3.onrender.com/skills').then((respuesta) =>respuesta.json());

}

const agregarSkill = (titulo,img) => {
    return fetch('https://api-rest-omf3.onrender.com/skills',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({titulo,img,id:uuid.v4})
    }).then((respuesta)=> console.log(respuesta))
}

const borrarSkill = (id) =>{
    return fetch(`https://api-rest-omf3.onrender.com/skills/${id}`,{
        method: 'DELETE'
    })
}

const detallesSkill = (id) =>{
    return fetch(`https://api-rest-omf3.onrender.com/skills/${id}`).then((respuesta) => respuesta.json())
}

const actualizarSkill = (id, titulo, img) => {
    return fetch(`https://api-rest-omf3.onrender.com/skills/${id}`, { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, titulo, img})
    }).then ((respuesta) =>console.log(respuesta));
}




export const serviceSkills = {
    listaSkills,
    agregarSkill,
    borrarSkill,
    detallesSkill,
    actualizarSkill
}
