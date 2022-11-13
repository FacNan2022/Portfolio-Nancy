const listaHobbies = () => {
    return fetch("http://localhost:3000/hobbies").then((respuesta) =>respuesta.json());
}


export const serviceHobbies = {
    listaHobbies
}